import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notificaciones } from 'src/app/domain/notificaciones';
import { Solicitudes } from 'src/app/domain/solicitudes';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { SolicitudesService } from 'src/app/service/solicitudes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-form',
  templateUrl: './modificar-form.component.html',
  styleUrls: ['./modificar-form.component.scss']
})
export class ModificarFormComponent implements OnInit {

  public idSusuario: number;
  public solicitud: Solicitudes = new Solicitudes(0,1,0,0,'sf'); 
  public notificacion: Notificaciones = new Notificaciones('00',1,0,0);
  public notificaciones: Notificaciones[];
  public opcionSeleccionada: number = 0;
  public mensaje: string = "";
  public idSub: number = 0;
  public idPro: number = 0;
  public idUsu: number = 0;

  constructor(public solicitudesService: SolicitudesService,
    public notificacionesService: NotificacionesService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('Id'));
    this.getById(params);
    this.getAllTheNotifications();
    this.notificacion.idSubsidio = params;
  }

  public getAllTheNotifications(): void {
    this.notificacionesService.listarNotificaciones().subscribe(noti => {
      this.notificaciones = noti
    })
  }

  public update(): void {
  this.solicitudesService.editarSolicitud(this.solicitud).subscribe(solicitud => {
    this.router.navigate(['/dashboard'])
    Swal.fire('Solicitud actualizada',
    `Solicitud con Id ${this.solicitud.idSubsidios} editada con éxito!`, 'success')
  }
  );
}

  public getById(id: number): void{
    this.solicitudesService.listarSolicitudesPorId(id).subscribe(solicitud => {
      this.solicitud = solicitud;
      this.idUsu = this.solicitud.idUsuario;
      this.idPro = this.solicitud.idPrograma;
      this.idSub = this.solicitud.idSubsidios;
    })
  }

  selectChangeHandler (event: any){
    this.opcionSeleccionada = event.target.value;
    this.notificacion.idNoti = this.opcionSeleccionada;
    this.solicitud.idEstado = this.opcionSeleccionada;
  }

  getMessage (mensaje:string){
    this.mensaje = mensaje;
    this.notificacion.mensaje = mensaje;
  }

  public datos(): void{
    console.log("idSubsidio: " + this.idSub)
    console.log("Programa: " + this.idPro)
    console.log("Usuario: " + this.idUsu)
    // console.log("idSubsidio: " + this.notificacion.idSubsidios)
    // console.log("idNoti: " + this.notificacion.idNotificacion)
    // console.log("mensaje: " + this.notificacion.mensaje)

  }

  public guardarNotiSoli(): void{
    console.log(this.notificacion)
    this.notificacionesService.registrar(this.notificacion).subscribe();
  }
}
