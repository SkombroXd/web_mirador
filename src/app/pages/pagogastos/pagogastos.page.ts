import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-pagogastos',
  templateUrl: './pagogastos.page.html',
  styleUrls: ['./pagogastos.page.scss'],
})
export class PagogastosPage implements OnInit {
  gastos: Gasto[] = [];
  departamentos: any[] = [];
  departamentoSeleccionado: number | undefined;

  constructor(
    private gastosService: GastosService,
    private apiService: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cargarDepartamentos();
  }

  async cargarDepartamentos() {
    try {
      this.departamentos = await firstValueFrom(this.apiService.getDepartamentos());
    } catch (error) {
      console.error('Error al cargar departamentos:', error);
      await this.mostrarMensaje('Error al cargar los departamentos', 'danger');
    }
  }

  async buscarGastos() {
    if (!this.departamentoSeleccionado) {
      await this.mostrarMensaje('Por favor seleccione un departamento', 'warning');
      return;
    }

    try {
      this.gastos = await firstValueFrom(
        this.gastosService.obtenerGastosPorDepartamento(this.departamentoSeleccionado)
      );
    } catch (error) {
      console.error('Error al cargar los gastos:', error);
      await this.mostrarMensaje('Error al cargar los gastos', 'danger');
    }
  }

  async actualizarEstadoPago(gasto: Gasto) {
    try {
      await firstValueFrom(
        this.gastosService.actualizarEstadoPago(gasto.id_gastos, gasto.pago)
      );
      
      if (gasto.pago) {
        gasto.fecha_pago = new Date();
      } else {
        gasto.fecha_pago = undefined;
      }
      
      await this.mostrarMensaje('Estado de pago actualizado', 'success');
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      gasto.pago = !gasto.pago; // Revertir el cambio en caso de error
      await this.mostrarMensaje('Error al actualizar el estado de pago', 'danger');
    }
  }

  private async mostrarMensaje(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }
}
