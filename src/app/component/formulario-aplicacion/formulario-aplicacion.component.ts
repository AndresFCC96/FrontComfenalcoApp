import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper'; 

@Component({
  selector: 'app-formulario-aplicacion',
  templateUrl: './formulario-aplicacion.component.html',
  styleUrls: ['./formulario-aplicacion.component.scss']
})
export class FormularioAplicacionComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  prueba():void{
    var prueba = (<HTMLInputElement>document.getElementById("prueba")).value;
    var s = (<HTMLInputElement>document.getElementById("modalidad")).value;

    console.log(s);
  }

  generatePdf() {
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Txt(" ").end
    );
    pdf.add(
      new Table([
        [ 'Modalidad de vivienda', (<HTMLInputElement>document.getElementById("modalidad")).value],
        [ 'Tipo de postulante', (<HTMLInputElement>document.getElementById("tipo")).value]
    ]).widths([ '*', 350 ]).end
    );
    pdf.add(
      new Table([
        [ 'Datos del postulante']
    ]).widths([ '*', 0 ]).end
    );
    pdf.add(
      new Table([
        [ 
          [ 'Nombre', (<HTMLInputElement>document.getElementById("nombre")).value],
          [ 'Documento', (<HTMLInputElement>document.getElementById("documento")).value]
        ]
    ]).widths([ '*', 350 ]).end
    );


    pdf.create().open();

  }

}
