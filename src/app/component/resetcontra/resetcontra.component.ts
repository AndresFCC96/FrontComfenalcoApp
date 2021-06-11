import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-resetcontra',
  templateUrl: './resetcontra.component.html',
  styleUrls: ['./resetcontra.component.scss']
})
export class ResetcontraComponent implements OnInit {

  public email:string;
  public msg:string="";

  constructor(public authComfenancoService:AuthComfenancoService,
              public router:Router) { }

  public resetpass():void{
    this.authComfenancoService.resetpass(this.email)
    .then(()=>{
      this.router.navigate(['/ingresar']);
    })
    .catch(e=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que no estas registrado o tu cuenta fue inabilitada'
      })
    });
  }

  ngOnInit(): void {
  }

}
