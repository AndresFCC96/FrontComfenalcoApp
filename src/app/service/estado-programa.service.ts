import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoProgramaService {

  private url: string=`${environment.apiUrl}`

  constructor(private http: HttpClient) { }

  public listarEstados():Observable<any>{
    return this.http.get(`${this.url}getContSusidiosStat`);
  }
}
