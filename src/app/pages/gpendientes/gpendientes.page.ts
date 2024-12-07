import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-gpendientes',
  templateUrl: './gpendientes.page.html',
  styleUrls: ['./gpendientes.page.scss'],
})
export class GpendientesPage implements OnInit {
  departamentos: any[] = [];
  departamentosFiltrados: any[] = [];
  filtroMorosidad: string = 'Todos';

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.cargarDepartamentos();
  }

  async cargarDepartamentos() {
    try {
      this.departamentos = await firstValueFrom(this.apiService.getDepartamentosConEstado());
      this.aplicarFiltros();
    } catch (error) {
      console.error('Error al cargar departamentos:', error);
      await this.mostrarMensaje('Error al cargar los departamentos', 'danger');
    }
  }

  aplicarFiltros() {
    this.departamentosFiltrados = [...this.departamentos];
    
    if (this.filtroMorosidad !== 'Todos') {
      const estadoFiltro = this.filtroMorosidad === 'No morosos';
      this.departamentosFiltrados = this.departamentosFiltrados.filter(
        depto => depto.estado === estadoFiltro
      );
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
