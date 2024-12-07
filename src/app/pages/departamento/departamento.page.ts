import { Component } from '@angular/core';
import { ApiService, Departamento } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.page.html',
  styleUrls: ['./departamento.page.scss'],
})
export class DepartamentoPage {
  departamento: Departamento = {
    numero: null as unknown as number,
    monto: null as unknown as number,
    estado: true
  };

  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {}

  async crearDepartamento() {
    try {
      // Validaciones locales
      if (!this.departamento.numero || !this.departamento.monto) {
        await this.mostrarMensaje('Por favor complete todos los campos', 'warning');
        return;
      }

      // Convertir a números
      const datos: Departamento = {
        numero: Number(this.departamento.numero),
        monto: Number(this.departamento.monto),
        estado: true
      };

      // Validar números
      if (isNaN(datos.numero) || isNaN(datos.monto)) {
        await this.mostrarMensaje('Los campos deben ser numéricos', 'warning');
        return;
      }

      if (datos.numero <= 0) {
        await this.mostrarMensaje('El número de departamento debe ser positivo', 'warning');
        return;
      }

      if (datos.monto < 0) {
        await this.mostrarMensaje('El monto no puede ser negativo', 'warning');
        return;
      }

      // Enviar al servidor
      await this.apiService.crearDepartamento(datos).toPromise();
      
      // Si llegamos aquí, todo salió bien
      await this.mostrarMensaje('Departamento creado exitosamente', 'success');
      this.limpiarFormulario();

    } catch (error: any) {
      // El error ya viene formateado desde el servicio
      await this.mostrarMensaje(error, 'danger');
    }
  }

  private limpiarFormulario() {
    this.departamento = {
      numero: null as unknown as number,
      monto: null as unknown as number,
      estado: true
    };
  }

  private async mostrarMensaje(mensaje: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: color,
      position: 'top',
      buttons: [{
        text: 'Cerrar',
        role: 'cancel'
      }]
    });
    await toast.present();
  }
}
