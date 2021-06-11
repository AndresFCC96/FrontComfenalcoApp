import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aplicacion } from '../domain/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  private url: string=environment.apiUrl

  constructor(private http: HttpClient) { }

  public listar():Observable<any>{
    return this.http.get(this.url+'programas');
  }

  public listarById(idPrograma:string):Observable<any>{
    return this.http.get(this.url+'programasPorId?idPrograma='+idPrograma);
  }

  public aplicar(aplicacion:Aplicacion):Observable<any>{
    return this.http.post(this.url+'registrarSubsidio',aplicacion);
  }

}
