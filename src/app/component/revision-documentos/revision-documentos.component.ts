import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-documentos',
  templateUrl: './revision-documentos.component.html',
  styleUrls: ['./revision-documentos.component.scss']
})
export class RevisionDocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boton():void{
    console.log("este es un boton");
  }

}
