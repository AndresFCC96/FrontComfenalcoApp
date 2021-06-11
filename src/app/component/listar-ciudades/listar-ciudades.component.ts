import { Component, OnInit } from '@angular/core';
import { Ciudades } from 'src/app/domain/ciudades';
import { CiudadesService } from 'src/app/service/ciudades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-ciudades',
  templateUrl: './listar-ciudades.component.html',
  styleUrls: ['./listar-ciudades.component.scss']
})
export class ListarCiudadesComponent implements OnInit {

  public ciudades : Ciudades;

  constructor(public ciudadesService: CiudadesService) { }

  ngOnInit(): void {
    this.Listar();
  }

  public Listar():void{
    this.ciudadesService.listar().subscribe(data=>{
      this.ciudades=data;
    });
  }



}
