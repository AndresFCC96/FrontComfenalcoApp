import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Notificaciones } from '../domain/notificaciones';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  url: string = `${environment.apiUrl}`

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(public httpClient: HttpClient) { }

  public listarNotificaciones():Observable<Notificaciones[]>{
    return this.httpClient.get<Notificaciones[]>(`${this.url}getAllNotiASoli`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
      );
  }

  public registrar(notificacion:Notificaciones):Observable<any>{
    return this.httpClient.post<any>(`${this.url}guardarNotiSoli`,notificacion)
  }



}
// .pipe(
//   catchError(e => {
//     Swal.fire('Error al consultar', e.error.mensaje, 'error');
//     return throwError(e);
//   })
// );