import { Component, OnInit } from '@angular/core';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-gpendientes',
  templateUrl: './gpendientes.page.html',
  styleUrls: ['./gpendientes.page.scss'],
})
export class GpendientesPage implements OnInit {
  gastos: Gasto[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarGastosPendientes();
  }

  async cargarGastosPendientes() {
    try {
      // Aquí implementaremos la llamada al servicio
      // Por ahora usaremos datos de ejemplo filtrados para mostrar solo pendientes
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
          id_gastos: 3,
          fecha_emision: new Date('2024-03-16'),
          monto_gasto: 75000,
          total_pago: 175000,
          pago: false,
          id_depa: 3,
          numero_depto: 103
        }
      ].filter(gasto => !gasto.pago); // Filtramos solo los gastos no pagados
    } catch (error) {
      console.error('Error al cargar los gastos pendientes:', error);
    }
  }
}
