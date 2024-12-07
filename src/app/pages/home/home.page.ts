import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { ApiService, Departamento } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

interface GastoForm {
  id_depa: number | undefined;
  monto_gasto: number | undefined;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  gastoForm: GastoForm = {
    id_depa: undefined,
    monto_gasto: undefined
  };

  departamentos: Departamento[] = [];

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

  async generarGasto() {
    try {
      if (this.gastoForm.id_depa === undefined || this.gastoForm.monto_gasto === undefined) {
        await this.mostrarMensaje('Por favor complete todos los campos', 'warning');
        return;
      }

      const gastoData = {
        id_depa: this.gastoForm.id_depa,
        monto_gasto: this.gastoForm.monto_gasto
      };

      const response = await firstValueFrom(this.gastosService.generarGasto(gastoData));
      await this.mostrarMensaje('Gasto generado exitosamente', 'success');
      
      // Limpiar formulario
      this.gastoForm = {
        id_depa: undefined,
        monto_gasto: undefined
      };
    } catch (error) {
      console.error('Error al generar gasto:', error);
      await this.mostrarMensaje('Error al generar el gasto', 'danger');
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
