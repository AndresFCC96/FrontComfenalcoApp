import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Aplicacion } from 'src/app/domain/aplicacion';
import { Programas } from 'src/app/domain/programas';
import { Users } from 'src/app/domain/users';
import { Usuarios } from 'src/app/domain/usuarios';
import { ProgramasService } from 'src/app/service/programas.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {
  public email:string;
  public aplicacion: Aplicacion;
  public usuarios: Usuarios;
  public users: Users;
  public id: string;
  public programas:Programas;
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  @ViewChild('formulario') inputFormulario: ElementRef;

  constructor(private storage: AngularFireStorage,
              private aplicacionService: ProgramasService,
              private usuariosService: UsuariosService,
              public router:Router,
              public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let params=this.activatedRoute.params['_value'];
    this.id=params.id;
    this.aplicacion=new Aplicacion ("","","","");
    this.usuarios= new Usuarios("","","","","","","","","","","","");
    this.datosUsers();
    this.programa();
    
  }

  onUpload(event):void{
    //console.log('image',event.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = 'Formularios de aplicacion/'+id;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();
    
  }

  programa():void{
    this.aplicacionService.listarById(this.id).subscribe(data=>{
      this.programas=data;
      console.log('123456'+this.programas)
    });
  }

  aplicar():void{

    var correo = localStorage.getItem("email");

    this.usuariosService.findAllByEmail(correo).subscribe(data=>{
      this.usuarios=data;

      this.guardar();
      
    },error=>{
      console.error(error);
      
    });

  }

  public datosUsers():void{
    this.usuariosService.findAllByEmail(localStorage.getItem("email")).subscribe(data=>{
      this.users=data;
    },error=>{
      console.error(error);
      
    });

  }

  guardar():void{
    this.aplicacion.idUsr = this.usuarios.idUsuario;
    this.aplicacion.idPrograma = this.id;
    this.aplicacion.fechaFinalizacion = "2021-06-04";
    this.aplicacion.formulario = this.inputFormulario.nativeElement.value;
    Swal.fire({
      title: '¿Esta seguro que quiere aplicar?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.aplicacionService.aplicar(this.aplicacion).subscribe(ok=>{
          this.router.navigate(['/home']);
        },err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que no cargaste el archivo'
          })
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
    


    
  }


}
