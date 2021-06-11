import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subsidio } from 'src/app/domain/subsidio';
import { Users } from 'src/app/domain/users';
import { Usuarios } from 'src/app/domain/usuarios';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {
  public usuarios:Users;
  public subsidio:Subsidio;
  public email:string;
  public password:string;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public router:Router,
              public usuariosService: UsuariosService) { }

  public ingresar ():void{
    this.authComfenancoService.login(this.email,this.password)
    .then(()=>{
      localStorage.setItem("email",this.email);
      this.findTipoByEmail();
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que no estas registrado o tu cuenta fue inabilitada'
      })
    });
  }



  public findTipoByEmail():void{
    this.usuariosService.findAllByEmail(this.email).subscribe(data =>{
      this.usuarios=data;
      console.log('tipo',this.usuarios.idTipoUsuario)
      if(this.usuarios.idTipoUsuario == '1'){
        this.router.navigate(['/home']);
      }else if(this.usuarios.idTipoUsuario == '2'){
        this.router.navigate(['/dashboard']);
      }else if(this.usuarios.idTipoUsuario == '3'){
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit(): void {
  }


}
