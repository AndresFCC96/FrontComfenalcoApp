import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../domain/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string=environment.apiUrl

  constructor(private http: HttpClient) { }

  public registrar(usuarios:Usuarios):Observable<any>{
    return this.http.post(this.url+'UserRegistration',usuarios);
  }

  public findAllByEmail(email:string):Observable<any>{
    return this.http.get(this.url+'getAllDataUserByCorreo?correo='+email);
  }

  public validarSubsidio(email:string):Observable<any>{
    return this.http.get(this.url+'getUserSubsidios?correo='+email);
  }

  public listarGenero():Observable<any>{
    return this.http.get(this.url+'getGeneros');
  }

  public listarPaises():Observable<any>{
    return this.http.get(this.url+'getPaises');
  }

  public listarCiudades():Observable<any>{
    return this.http.get(this.url+'getCiudades');
  }



}
