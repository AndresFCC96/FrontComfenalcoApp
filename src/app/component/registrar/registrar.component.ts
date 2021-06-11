import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudades } from 'src/app/domain/ciudades';
import { Genero } from 'src/app/domain/genero';
import { Paises } from 'src/app/domain/paises';
import { TipoDocumento } from 'src/app/domain/tipo-documento';
import { Usuarios } from 'src/app/domain/usuarios';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public email:string;
  public password:string;
  public usuarios:Usuarios;
  public tipoDocumento:TipoDocumento;
  public paises : Paises;
  public ciudades: Ciudades;
  public genero: Genero;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public activateRoute:ActivatedRoute,
              public usuariosService: UsuariosService,
              public tipoDocumentoService: TipoDocumentoService,
              public router:Router) { }

  
  public registrar():void{
    
    this.guardar();
    this.authComfenancoService.createUser(this.email,this.password)
    .then(()=>{
      this.authComfenancoService.validarEmail();
      this.router.navigate(['/ingresar']);
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que te hicieron falta datos por llenar'
      })
    });
  }

  public guardar():void{

    this.usuarios.idTipoUsr = '1';

    this.usuariosService.registrar(this.usuarios).subscribe(ok=>{
      console.log("Registro");
    },err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Recuerda que debes ingresar todos los datos'
      })
    });
  }

  listarTipoDocumento():void{

    this.tipoDocumentoService.listarTipoDocumento().subscribe(data=>{
      this.tipoDocumento = data;
    });
    
  }
  
  listarGenero():void{

    this.usuariosService.listarGenero().subscribe(data=>{
      this.genero = data;
    });
    
  }

  listarPaises():void{

    this.usuariosService.listarPaises().subscribe(data=>{
      this.paises = data;
    });
    
  }

  listarCiudades():void{

    this.usuariosService.listarCiudades().subscribe(data=>{
      this.ciudades = data;
    });
    
  }

  ngOnInit(): void {
    this.usuarios= new Usuarios("","","","","","","","","","","","");
    this.listarTipoDocumento();
    this.listarGenero();
    this.listarPaises();
    this.listarCiudades();
  }

}
