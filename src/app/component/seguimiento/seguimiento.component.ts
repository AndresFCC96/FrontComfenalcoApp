import { Component, OnInit } from '@angular/core';
import { Subsidio } from 'src/app/domain/subsidio';
import { SubsidiosService } from 'src/app/service/subsidios.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {

  subsidio: Subsidio;
  

  
  public email = window.localStorage.getItem('email');

  constructor( public subsidioService: SubsidiosService, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.recuperarid();
  }

  recuperarid(){
    console.log(this.email);
    
    this.usuariosService.validarSubsidio(this.email).subscribe(data=>{
      this.subsidio=data;
      console.log("holi"+this.subsidio);
    });
  }

}
