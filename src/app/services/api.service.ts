import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interfaces
export interface Departamento {
  id_depa?: number;
  numero: number;
  monto: number;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  crearDepartamento(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(
      `${this.apiUrl}/departamentos`, 
      departamento
    ).pipe(
      catchError(this.handleError)
    );
  }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(
      `${this.apiUrl}/departamentos`
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
  
    // Si el error tiene un mensaje personalizado del backend, lo usamos
    if (error.error && typeof error.error === 'object' && 'error' in error.error) {
      return throwError(() => error.error.error as string);
    }
  
    // Si no, usamos un mensaje genérico
    let mensaje = 'Ha ocurrido un error';
    switch (error.status) {
      case 0:
        mensaje = 'No se pudo conectar con el servidor';
        break;
      case 400:
        mensaje = 'Datos inválidos';
        break;
      case 409:
        mensaje = 'El departamento ya existe';
        break;
      case 500:
        mensaje = 'Error interno del servidor';
        break;
    }
  
    return throwError(() => mensaje);
  }
}