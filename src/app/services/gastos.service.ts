import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../interfaces/gasto.interface';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = 'http://localhost:5001'; // Corregimos el puerto

  constructor(private http: HttpClient) { }

  generarGasto(data: { id_depa: number, monto_gasto: number }): Observable<Gasto> {
    return this.http.post<Gasto>(`${this.apiUrl}/gastos/generar`, data);
  }

  obtenerGastosPorDepartamento(id_depa: number): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.apiUrl}/gastos/departamento/${id_depa}`);
  }

  actualizarEstadoPago(id_gastos: number, pago: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/gastos/${id_gastos}/pago`, { pago });
  }

  obtenerTodosLosGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.apiUrl}/gastos`);
  }
} 