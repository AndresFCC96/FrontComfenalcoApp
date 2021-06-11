import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComfenancoService } from 'src/app/service/auth-comfenanco.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public msg:string="";
  public nombre=localStorage.getItem("email");

  constructor(public authComfenancoService:AuthComfenancoService,
              public router:Router) { }
          

  public salir():void{
    this.authComfenancoService.salir()
    .then(()=>{
      this.router.navigate(['/ingresar']);
    })
    .catch(e=>{
      this.msg=e.message;
    });
  }


  ngOnInit(): void {
  }

}
