import { Component, OnInit } from '@angular/core';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-pagogastos',
  templateUrl: './pagogastos.page.html',
  styleUrls: ['./pagogastos.page.scss'],
})
export class PagogastosPage implements OnInit {
  gastos: Gasto[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarGastos();
  }

  async cargarGastos() {
    try {
      // Aquí implementaremos la llamada al servicio
      // Por ahora usaremos datos de ejemplo
      this.gastos = [
        {
          id_gastos: 1,
          fecha_emision: new Date('2024-03-15'),
          monto_gasto: 50000,
          total_pago: 150000,
          pago: false,
          id_depa: 1,
          numero_depto: 101
        },
        {
          id_gastos: 2,
          fecha_emision: new Date('2024-03-15'),
          monto_gasto: 50000,
          fecha_pago: new Date('2024-03-20'),
          total_pago: 150000,
          pago: true,
          id_depa: 2,
          numero_depto: 102
        }
      ];
    } catch (error) {
      console.error('Error al cargar los gastos:', error);
    }
  }

  async actualizarEstadoPago(gasto: Gasto) {
    try {
      // Aquí implementaremos la llamada al servicio para actualizar el estado
      console.log('Actualizando estado de pago:', gasto);
      // Si el pago cambia a true, actualizamos la fecha de pago
      if (gasto.pago) {
        gasto.fecha_pago = new Date();
      } else {
        gasto.fecha_pago = undefined;
      }
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      // Revertir el cambio en caso de error
      gasto.pago = !gasto.pago;
    }
  }
}
