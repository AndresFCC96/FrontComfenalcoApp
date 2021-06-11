import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programas } from 'src/app/domain/programas';
import { Subsidio } from 'src/app/domain/subsidio';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import { ProgramasService } from 'src/app/service/programas.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public msg:string="";
  public programas:Programas;
  public subsidio:Subsidio;

  constructor(public programasService:ProgramasService, public router:Router, public usuariosService: UsuariosService) { }

  public validarSubsidio():void{
    this.usuariosService.validarSubsidio(localStorage.getItem('email')).subscribe(data =>{
      this.subsidio=data;

      console.log(this.subsidio)

      if(this.subsidio.estado = "undefined"){
        this.router.navigate(['/seguimiento']);
      }
    });
  }
  
  public findAll():void{
    this.programasService.listar().subscribe(data=>{
      this.programas=data;
      console.log('123456'+this.programas)
    });
    
  }


  ngOnInit(): void {
    this.validarSubsidio();
    this.findAll();
  }

}
