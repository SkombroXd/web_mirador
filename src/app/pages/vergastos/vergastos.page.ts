import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { firstValueFrom } from 'rxjs';
import { Gasto } from '../../interfaces/gasto.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vergastos',
  templateUrl: './vergastos.page.html',
  styleUrls: ['./vergastos.page.scss'],
})
export class VergastosPage implements OnInit {
  gastos: Gasto[] = [];
  gastosFiltrados: Gasto[] = [];
  filtros = {
    ano: 'Todos los años',
    mes: 'Todos los meses',
    estado: 'Todos los estados'
  };

  constructor(
    private gastosService: GastosService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cargarGastos();
  }

  async cargarGastos() {
    try {
      this.gastos = await firstValueFrom(this.gastosService.obtenerTodosLosGastos());
      this.aplicarFiltros(); // Aplicar filtros iniciales
    } catch (error) {
      console.error('Error al cargar los gastos:', error);
      await this.mostrarMensaje('Error al cargar los gastos', 'danger');
    }
  }

  aplicarFiltros() {
    let gastosFiltrados = [...this.gastos];

    // Filtrar por año
    if (this.filtros.ano !== 'Todos los años') {
      gastosFiltrados = gastosFiltrados.filter(gasto => {
        const fechaEmision = new Date(gasto.fecha_emision);
        return fechaEmision.getFullYear().toString() === this.filtros.ano;
      });
    }

    // Filtrar por mes
    if (this.filtros.mes !== 'Todos los meses') {
      gastosFiltrados = gastosFiltrados.filter(gasto => {
        const fechaEmision = new Date(gasto.fecha_emision);
        const mes = (fechaEmision.getMonth() + 1).toString().padStart(2, '0');
        return mes === this.filtros.mes;
      });
    }

    // Filtrar por estado de pago
    if (this.filtros.estado !== 'Todos los estados') {
      const estadoPago = this.filtros.estado === 'Pagado';
      gastosFiltrados = gastosFiltrados.filter(gasto => gasto.pago === estadoPago);
    }

    this.gastosFiltrados = gastosFiltrados;
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
