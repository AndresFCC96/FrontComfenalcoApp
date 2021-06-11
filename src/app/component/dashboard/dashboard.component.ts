import { Component, OnInit } from '@angular/core';
import { EstadoPrograma } from 'src/app/domain/estado-programas';
import { Solicitudes } from 'src/app/domain/solicitudes';
import { EstadoProgramaService } from 'src/app/service/estado-programa.service';
import { SolicitudesService } from 'src/app/service/solicitudes.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public estadoPrograma: EstadoPrograma;
  public solicitudes: Solicitudes[];

  constructor(public estadoProgramaService:EstadoProgramaService,
  public solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
    this.ListarEstadosPorPrograma();
    this.ListarTodasLasSolicitudes();
  }

  public ListarEstadosPorPrograma():void{
    this.estadoProgramaService.listarEstados().subscribe(data=>{
      this.estadoPrograma=data;
    })
  }

  public ListarTodasLasSolicitudes():void{
    this.solicitudesService.listarSolicitudes().subscribe(data=>{
      this.solicitudes=data;
    })
  }

}
