import { Component, OnInit } from '@angular/core';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-vergastos',
  templateUrl: './vergastos.page.html',
  styleUrls: ['./vergastos.page.scss'],
})
export class VergastosPage implements OnInit {
  gastos: Gasto[] = [];

  constructor() { }

  ngOnInit() {
    // Aquí cargaremos los gastos desde el servicio
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
      // Aquí podríamos mostrar un mensaje de error al usuario
    }
  }
}
