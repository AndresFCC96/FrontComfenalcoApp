import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Img, PdfMakeWrapper, Table, TocItem, Txt } from 'pdfmake-wrapper';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-formulario-aplicacion',
  templateUrl: './formulario-aplicacion.component.html',
  styleUrls: ['./formulario-aplicacion.component.scss']
})
export class FormularioAplicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prueba(): void {
    var prueba = (<HTMLInputElement>document.getElementById("prueba")).value;
    var s = (<HTMLInputElement>document.getElementById("modalidad")).value;

    console.log(s);
  }


  generatePdf() {
    const pdf = new PdfMakeWrapper();
    pdf.images.apply
    // Estilos
    pdf.defaultStyle({
      bold: true,
      fontSize: 13,
      italics: true,
    });
    pdf.pageMargins([20, 20, 20, 20]);

    // Inicio
    pdf.add(
      pdf.ln(12)
    );
    pdf.add(
      new Txt('DOCUMENTO DE POSTULACIÓN').alignment('center').italics().end
    );
    
    pdf.watermark( new Txt('C O M F E N A L C O').color('blue').end );
    pdf.add(
      pdf.ln(3)
    );
    pdf.add(
      new Table([
        ['Modalidad de vivienda', (<HTMLInputElement>document.getElementById("modalidad")).value],
        ['Tipo de postulante', (<HTMLInputElement>document.getElementById("tipo")).value]
      ]).widths(['*', 350]).end
    );
    pdf.add(
      pdf.ln(3)
    );
    pdf.add(
      new Txt("Datos del postulante").end
    );
    pdf.add(
      new Table([
        [
          ['Nombre:'],
          [(<HTMLInputElement>document.getElementById("nombre")).value]
        ],
        [ 
          ['Documento:'],
          [(<HTMLInputElement>document.getElementById("documento")).value]
        ],
        [ 
          ['Documento expedido en:'],
          [(<HTMLInputElement>document.getElementById("expedida")).value]
        ],
        [ 
          ['Dirección residencia:'],
          [(<HTMLInputElement>document.getElementById("direccion")).value]
        ],
        [ 
          ['Correo electrónico:'],
          [(<HTMLInputElement>document.getElementById("correo")).value]
        ],
        [ 
          ['Departamento:'],
          [(<HTMLInputElement>document.getElementById("departamento")).value]
        ],
        [ 
          ['Ciudad:'],
          [(<HTMLInputElement>document.getElementById("municipio")).value]
        ],
        [ 
          ['Barrio:'],
          [(<HTMLInputElement>document.getElementById("barrio")).value]
        ],
        [ 
          ['Teléfono:'],
          [(<HTMLInputElement>document.getElementById("telefono")).value]
        ],
        [ 
          ['Razón social de la empresa:'],
          [(<HTMLInputElement>document.getElementById("razonSocial")).value]
        ],
        [ 
          ['Dirección de la empresa:'],
          [(<HTMLInputElement>document.getElementById("direccionE")).value]
        ],
        [ 
          ['Teléfono de la empresa:'],
          [(<HTMLInputElement>document.getElementById("telefonoE")).value]
        ],

      ]).widths(['*', 350]).end
    );


    new Img('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUXGBcZGBcXFxUWFxceHR0aFx0YGRUYHiggGB4lGx4XITIiJSkrLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS0tLS01Mi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAIwBZwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABHEAABAwIDAwgIAwUHBAIDAAABAAIDBBEFEiEGBzETFkFRVGFxkyIygZGhsdHSFELBI1JicoIVM0OSorLwFyTC8WOjJVNz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADARAAICAQIEAwcEAwEAAAAAAAABAhEDEiEEMUFREyJhMnGBkaGx8AUjQtFSweEU/9oADAMBAAIRAxEAPwC8UREARF5yyhou4gDrJAHvKA9EWvBVMf6j2u/lcD8lsIAiIgCIiAIiIAiLCAyiwFlAEREAREQBERAERYQGUWAsoAiIgCIiAIiIAiwl0BlFhEBlERAEWEugMosXWUAREQBERAEREBqYnXMgifNIbMjaXHwCoKWerxmsyA8blrSTycTR029wvxJKsffPX5KJsQOs0jR7G+mfiGrlbjsP9CoqCOJbG3wbdzveS33LKduSicWb9zKsfTmyGbTbLVGFvjeZR6V8kkZc0gi1wekcfbqrj3fY26roo5ZP7wFzHnrLTa/tFitTeJsvLXxRRxPY0seXEvv1EaWC9tg8Afh9K6OZ7Cc7nktvlAsOvwKRi4y25FsWJ48rUb0kqul1RuK7W12JVXIUTnsYSQxjDkJA4ve/o017r9a1ajFcUwqdrZpXO0Dsrn8pHI3gdTqOnqIU+IiXxS5067l+rF1yxizXUn4oeqYuVF/5c1lTezO1mLTzCKKUzPc11mvEYa3h6ZsBw7+kjirOSRpkzKDS7l8XS6/PWK4xidHVFs1TIJW2J9MOYQbHhwII7l3NqcSxeWnFa69PTHLZkb8rgDYBzvzG5/8ASr4nozP/ANS38r2Lpuq43x4/JBFFBE8sdKXFzmmzsrbaXGouT8Cvjc/tBPUNnine6Tk8ha52rgDcFpPTw6VW+21TVuqXMrXXkZwbdpyNd6YaC3TgQolPy2VzZ7xWupO90uzU7XtrpHjk3sflbmcXEk2zEcOAPvVr3Vf7ISVOH4fLLXuOWMN5Jl2mzA0ANGXpLjbVQmkxLFcVmfyMrmNbqQ15jjYDwFxqT70UtEUiYTjihGKTt9C9rpdUXgG09dQ1opqmV72iRscjHuzgZrek1x8QVZW8jF30tC+SJxZIXMaxwtcEkXOv8IKuppqzSGeMot9uZKrpdUns5jOM1scscEpdYjNK4taW6eo020J49fgtHYvaesjro4pJpHh8nJyMe4u1Jt08CD1KvirbYp/6o2tnTL6ul1Bt5u1zqKNkcNuWlvYnXI0cXW676D2qAU+F4xPAa0TyFli4Xmc17gOJawaW0PGymU6dJWXnnUZaUmy+LqD73MQMVAQ1xa6SRjQQSDYekbEeC4e6jbGeeY0tQ8yegXsefWFrXaT06G+uq1t+dd6dNCOgPkPts0fIqHJODaKzzKWFyR0tyjJHQzzSPe67wxuZxdo0XNrnrPwVl3UI2Feyjwdk0mjcjpnd+YkgeJFgq/bjGKYrO5sD3MaBmyNfybGDou4akqFLTFIiM1ixxjVtrkXvdZVG7LbWVtHWtpaqR728oInsecxYSbBzXceJHdZWTt9tP+Ap87QDK85YweF+Jce4D9FZTTTfY0hnjKLlyrmShLqhsPgxiuY6pjmlLQTY8pydyOIYwaG3sXf3W7Z1Ek/4SpeZA4Esc71wW6lpPSLX49ShZL6FI8Sm0mqvkW2tTFf7iX/+b/8AaVtLWxEfspP5H/IrQ6SjN1tRI7EoQ6R5FpNC5xHqnoVxbXYsKWkmn6WtIb/MdG/FU5ujb/8Ako+5knyUk33Yx/c0jT/8r/i1o/3H3LDHKoWefgno4dsj27Gjlqq5pfI8si/aPu51ib+iCL9J19ivpV3u6pG0GGPq5RYvBld15QPQb7eP9ShcGL4pis7mwyOYAM2Vr+TjY29hdw1JUqWlLq2XxSWGCVW30L4uviR9gSeAF1Q0e0GI4ZVclNK5+UjPG55kY5p6WuOo06Vbm1mJBmHTzjS8JLfF4sPmrxmnfobwzKSfRrmVBszVS1WKs/ayZXTukIzutlBL7WvbqUt32Ym5gp4WPc0kuecri02Ayjh7fcuJuUoc1ZJL0RxEe1xA+QK0979XymIlg15NjGDxN3fqFin+3fc4k2uHbfNssjdXC9uHxve5zjI5z7uJJsTYanuCmIUQxTFG4XhsZtdzY2Rsb1vy9PdxJVb4a3GMTzyxzvytJ/xOSZfjlYG8dP8A2tdWmkdXiLGlBK3Re91lUzu62uqm1jaSpkdI1xcyzzdzHjqdxtoRZXKFaMrNcWVZI2jKIisaBYWVgoCm9+NVeenj/cje6385A+TVNt1dJyeGwX4vzvP9TiR/pyquN87T/aAJ4GFlve+6tfZGeP8AAU7mObkETNbiwsLG/VY3WUVc2ceLfiJs7t1F95VeYsOncDq4NjH9bg0/6bqrMU2gqazEnMpqiVrJZWsjDHuADRZpcAO4FynW+hxFCwDgZW39gdZS53F0WebXCdLkcLcdQXkqJyPVDY2nx9J3wDfetHfbUg1kTB+SLX+pxP6KW7l4mihc4cXSvzewAC/sVc7SyGvxV7YzcSStjaR+62zCfcC5Zy2gjCarh4xXVlg4/MafZ9jfzOhhj/zWv/puuRuNobuqZyOGSNp8bud/4rZ32VQZDTU7eBc51u5gDR/u+C6+6iEQ4XyztMzpZD4NJaPg1XS/cS7GqV8Ql/iit9sXGrxeRg1DpmRDuAysP/kVYe+KpEeHthbpnkY0DuZ6X6BV/u3hdUYrG92tjJM73H/ycF3t+NbeanhB0ax7z4uIA+DfiqJ+WTMIv9qc+7OzuRoctNNMf8SQNHgwfUlQGu/7zFyOIkqQ3+lpA/2tKtXZIfhMGY86FsL5T4uu8fMBVtujozJiLHnXk2PeT3n0R/uJ9ilraMS2SPlxw+P59Sa77K3JSRQj/EkufBgv8y1QbYzbOSgjeyOmEmd2YuJcOAsBoDw/VSLfm48pSjoDZD7y0foFMdhpGQ4TBISMrYi9x79XHXxuFNXkZdxlPO6dUin/AMRJXYkyV0ZaZZoyQAbAAtHEj90Kc78a2zKaAdLnvPgAGj4k+5dTYneA+vqeQNK2MBjnl4eXWsQALZRxuoRvhrOUxAsGvJRsb7T6Z+YVXSg33KS0xwycXdsnm7CEU+FcsR63KSnvAvb4AKut2cBnxSN7tbcpK7xAOv8AmcFZG1R/B4KYxoRDHEPF1mn4XPsUX3G0V5KiYj1WtYPaST8AFZ+1FF5R/cx4+25MNtarC4y19dHHJJazWlueS3c3oF+kqC7Q7ys0JpqKDkY8uTMbXa31bNa3Rotpe6jcrHV+JlkjyDLMW5v3WgkAC/cNFON5dDTUNAymp42tdK9tz+dwbqS53E62UOTdtbFXknNSlGkl8zl7kqPNVSy9EcWX2uP0auVvRqTNicjBrl5OIeNhf4lTfcpSZKSaY/nkOvcwAfO6gOz7fxmLscdQ+d0h8Gkv/QKGvIl3KSVYYQ7snu9eX8PhsFM02zOYz2Mbc/EBfe5SgyUkkxGskhA8Gi3zuuVv1kOalb0WlPt9AKT7E1TKfBo5SQAyN7z43cbe/RX/AJ/A3TT4h+iPPEd3EM1Wat08ocZGyZRky+iQQNW3tp1qEb6a7PWMi6I4xp3uJPyDV393e2lbW1XJS8nybWOe7Kyx6ABe/Wfgoft4M2MSB+gMsLdf3bMHyVZtOO3czzODxXFc2XHs5SCloImnTk4Q53jlzOPvuqd3XNMmKRu6uVefcf1IVqbxsSFPh01jYvaI2d5dpp/TcqE7kMMvLNUkaNaI2nvNnH4Ae9Wl7UUaZVeWEV0LhXjWj9m/+V3yK9l51HqO/lPyWp2FEboTbEQTwEUpP+la0+bFMWIGrZJbeETDx/yj3lcnAMR5A1DwbOdBJG3xeWj5BysTcnglhJWOHH9nH4CxcR7bD2LmhvSPJw+eMYfFlhYtHTNpy2oDBA1oDg+2Sw4A+5V3JvAw6jzigpLudoSGiJjrcLn1iPYvPfhXuz08F/QymQjoJvlF/AX966G7zZelho218zWyPLDJd1i2MDWwB0vpxWjbcqR1znOWVxhSrqVlXV8tdVh8vryyMZYCwaCQ0NA6gFa2+Cp5LD44RpnexvsaCf0CgGwURqcWjeR/iPmPsu4fEhd/ffW3nghB0axzz4uNh8B8Vmn5Gzng6wzn3OzuSo8tLNMfzyZR4NA/UlQGMGsxjrElVf8Apa+/uyhWls5/2mCCQ6EQPlPi4Fw+YVfbnaPlMQznURxucfE2aPm5WkvZiXnHbHjOzvxrf2lPAOAa6Q+05R8j71ydl94EtHTNgjpA8AuOa7xmJN76DwXzvkcTiNjwEMdvaXK1KvEm0WHCYAOEcLMovYOOUAC9ukpu5N3RZKUs05J1RUOwUD5sVjkc1wvI+U6Gw4u4+Jsv0AFDdg9sn4g6W9OImxhuoeXXJ6PVFtFM1pjVI24eMVC07v4BERXOgLCyiAiO3exrcQY0h3JzR3yutcEHi1w6vkq4O7HEm3jDo8h42lcGHxbbX3K5azGKeJ2SWohjda+V8jGOt12cQbLx5yUfbKfzovuWcscW7ZhPDjm7fMjOwewDaJ3LyuEk9rC3qRg8ct9STwupHtRgbKynfTvOXNYtcOLXA3B/53r75yUfbKbzovuTnJR9spvOi+5WpJUXjCCjpXIqYbu8VhzMhlbkdxLJnMa4fxNNv1Ut2A3ffg3/AIioc181iGhty1l+JuRcuI0v4qV85KPtlN50f3Jzko+2U3nR/coWNJ2ZwwY4uyJ7wNh6ivnZJHLE1jGZQHZr3uSToPBSB2BPbhv4KJzQ/keSDjfLe1idNetbvOSj7ZTedF9yc5aPtlN50X3KdKtsuoQTcu5Fd3uwklBNJLLJG8uYGty5tNbm9x4LR213eVNbVvnbNG1hDWtBz3AAF72FuNz7VOOclH2ym86L7k5yUfbKbzo/uUaFVFfBx6NHQ1dpcFfNQvpIHNYXNYwOdewaCL8OsAj2ribu9ipKB0z5ZGPLw1rcmbQAkm9++3uUl5yUfbKbzo/uTnJR9spvOj+5TSuyzhByUuqOTt7skMQiaA4MljJLHEXGtrtdbWxsPcq5G7vFgzkA9vJE6t5Y8n45bforb5yUfbKbzY/uWecdH2ym82P7lDgm7ZTJhxzds42wWxooGOLnB80ls7hoABwa2+tvFRzEd21RNXOqnzR5HTB5b6V8oIOXhbgLKec5aPtlN50f3Jzko+2U3nR/cpcE1RZ4sbio9EcreBs9NXQNhhkYyzw52fNrYGwFu8rO7/Zl1BA6ORzXPe8uJbe3AADXuC6nOSj7ZT+dH9yc5KPtlP50f3JSuy2mOvX1K32q3Z1JqXT0bmZXuz5S4scxxN/RNrEX16181W7Cuna189W182oOdz3hregBxFyVZXOSj7ZTedF9yxzko+2U3nR/cq+HEzfD4nZz8D2fkp8O/CBzOVySNzC+XM/Nrwvpf4KPbB7vJaKp5eWWN4DHNAbmvc211HVf3qZc5aPtlN50X3Jzko+2U3nRfcrOKdehbw4Wn25HL282UGIQtaHBkjCSxx1Guhaemx04dSrcbt8Uy8jnZyV725Z3J368tv0Vuc5KPtlN50X3Jzko+2U/nR/colBN2ys8OObtnK2F2Qbh8TgXB8r7F77WGnBremwXF3g7v3Vkn4ine1stgHtdcNfbgQ4DQ/RS/nJR9spvOj+5OclH2ym86L7lLiqou8cHDR0KoG7rFJy1lRK0MbwL5XSZR/C0X/RWts3gcdHAyCPUN1Lja7ieLjZZ5yUfa6fzovuTnLR9spvOj+5RGCRGPFCG65nVXy8XBHcuZzlo+2U3nR/cnOWj7ZTedH9yua6kVWd0FTr+3h/1/RWvgGFtpqeKnbwjaBfrPSfablfHOSj7ZTedF9yc5aPtlN50f3KsYqPIyx4seP2Thbw9jjXsY6NzWzR3y5r5XA8WkgXGvSobhe7jEXNMM1RycFicjZXODnW09ECwF+PyVn85aPtlN50f3Jzko+2U3nRfcocE3ZEsOOUtTIhsBsDLQ1Dp5ZI33jLAGZri5BPEdQWvtpu8qa2rdOJomsIa0NOe4A8BbrU35y0fbKbzovuTnJR9sp/Oj+5NCqh4OPTp6GltPgck9CaSFzWEtY27r2yttfh12XK3d7GSYfyrpXse5+UAszaAdd+9SLnLR9sp/Oj+5OclH2yn86P7lLirstohqUuqIzvC2FNcWzQvayZrctnXyvbqQCQLgg9Khf8A07xWQNhkkbyTTpmmc5je8MAPy9ytnnLR9spvOj+5OctH2ym86P7lDgm7KTwY5O2a2x2zTKCDkmnM4nM99rZncOHQANApAubS43TSODI6mF7jwa2WNzj06AG5XRCulRvFJKkZREQkIiIDlV2A0szs81NDK+1s0kbHusOjM4XtxXjzUoex03kx/RdtYso0rsRSOLzUoex03kx/ROalD2Om8mP6LtWSyaV2QpHF5qUPY6byo/onNSh7HTeTH9F2rJZNK7IUji81KHsdN5Mf0TmpQ9jpvJj+i7VksmldkKRxealD2Kn8qP6LQxTDMJpgHVFPSRBxsM8UQue7RdPabEzTUstQ1mcxtuG9fjbo6VT+JbWRYk1kVc0QPaTyc0dyxua1xJG4k5TYag3VJaVskrMcuSMNtr9TrbWYxT0s7OTwujlpnNaWyiNhEl+Ia8DKCOqylOy/9k1zM0NJTh49aN0MQe3xFtR3hVW4VFAckrGTU8nQTnp5h+8x35XDrFiF9GhLAK7DZHlrNXMv+2g7ngeuw/vcOtZqW90cqzyUm2vh29225d3NSh7FT+TH9FnmpQ9jpvKj+i4+wO2ja5mSSzKhg9Jo4PH77O7rHQu9jGLx07bu1cfVaOJ+gV5Txxi5SpL4HoYo+LWhXfI8BsrQ9jpvJj+iyNlKHsVN5Mf0URp6mepqWuBN7g6EgMAOvgLe9WHHICNCD4WK5+F4qPEptRpJ0rrc6OJ4XwGk2m6t+hyualD2Om8qP6JzUoex03lR/RdqyWXZpXZHPSOLzUoex03kx/ROalD2Om8mP6Lo18xZE94Au1rnC/DQE6qK7utqpsQZK6VkbMjmgZM2txfXMSoqN1SKuUU1Hv8AnY7PNSh7HTeTH9E5qUPY6byY/ou0EU6V2RakcXmpQ9jpvJj+ic1KHsdN5Uf0XC3i7YS0BgETI38rnvnzaZcvCxHWplTuJa0niQCfaFFRuqRVOLbXY5XNSh7HTeTH9E5qUPY6byY/ou0inSuyLUji81KHsdN5Uf0TmpQ9jpvJj+i7SJpXZCkcXmpQ9jpvJj+ic1KHsdN5Mf0XbWE0rshSOLzUoex03kx/ROalD2Om8mP6Lsr6TSuyIpHE5qUPY6byo/onNSh7HTeTH9F2V9JpXZCkcTmpQ9jpvJj+ic1KHsdN5Uf0XaXjUTtjaXvc1rWi5c4hrQOsk6AJpXYmkcvmpQ9jpvKj+ic1KHsdN5Uf0X3he0dLUSOigmbI5rcxy6gC9vW4cV2FFR7IhU1aOJzUoex03kx/ROalD2Om8mP6Lsr6U6V2RNI5NJs9SRPEkVLBG8cHMjY1wvpoQLrq2SyypoJUEREJCIiAIiIAiIgCIiALBWVp4lM5sbnNGot/7WeXIscHN8lvsTFW0io9ucdxSlrHvL3thJ/ZiwdC5vURwv131UfkNLWm4DKOpPRwppT3HjC4+0K3JcQztLJmMlYeLXAEFQrHt3kMt30T+Td/+mQ+ie5j+jwK8rh/1PhuJdRlu+ktn8OnyZhxPAZ8dutS/OREqPEaihc6mqYc8TvXgl1af44z+U9Ic1bpoTH/AN/hUj3Mb/eRnWWG/FsjB68Z61rCvlp/+zxCB0kQ4NfpLH/FDJ0Du1aVJNhtnMlU2rppuWpgyQ3ByvDraRTM9pPUbLv5X6fNHBBOTSX/AFEcEwcRXUP7KaM5pYW8G9ckQ6Yj0t/LfqU/pqd9aGVWbLHIwPc5x0YfVcwHps4Gy5OObIvL/wAbhoDZGm74AQLH95l9C0ji0967tfFJK5sLA1jGsaXMbZsURIu4Et00N15/FSx5cEZpOSbWmuvP8a5r05ns/pMcuPPNXp23dWveul/JHxVV7Wt/D0gdYmzn29OQ+zoUk2RoxFG4F4LybuaDfJ3HvUWfUNjHJ093POjpbanujH5R8SpHsjCyPPGXAy6F4H5RwAvwJ61hwMtXEJuntW3sx7KPd9frvzPW4yOnA0rXXf2pesuy/skcsoaC5xAAFyToAOslQCt3lZ5DDh9LJVOH5hcNPeLA6d5svLfLiz2QRUrDYzuOa3S1ttPaSPcpXsjgEdHTMiYBmsDI7pc7pJPT1Be9bbpHzzlKU3CO1c2RDEdpcXEMhlwxoYWPBLXi7QQQSdTw48F87ky1lJUPcQGiXUnQABjTe6nO1LrUdQf/AIpP9pVIw15iwUxtNuWqSD3ta1pI9pyqsnpdvszLI/DmpN3Sf+iwXbfzVEjmYbRunDTYyPOVn/PE37liXbuqpXNGI0JijcbcrG7M0f8APFY2V2ihpaWKFtFWaNBcRTn0nHUuvfW56VjazaNlVSSwCjrMzm+gXU5ADhqDe+mqXt7W5Op1erft0+xxt8dQ2V9A5jg5r8xaRwIcWWKmu0W0M1O9kNPRSVL3MzXboxvRZzrWHtVRVjZQ3DYpmPY5ryA14LTlMwtodbK/6qpZG3NI9rGji5xDQPaUg7ba9BhbnKclten7EJfjmMgZ/wCzorccokBd8+K3djtt2Vr3QPidDOwEuYdb2NjY6HQ8QQsYlvGoYzlje6ok6GQtLiT1X4KutnsWfHidXVyx8m9sU8hjP5T6Nmn2kI5U1uHk0SSUr7llbW7dU1EchvJNa/Jstp/Mfy/NQSo3xVF/Qp4Wj+IvcfgQo5shhLsSrsszic15JXdJAIuL9FyQPBX1QYPTwsDIoY2NHQGj4m2qhOU906KwllzeaLpFW02+KX/EpWEfwPc34G6nuP7YQUlPHNLfNI0OZE2xebi/sA61TO8Fjf7SqGtAAztFgABwA4DvXntpiBmrH5ickZbE22tmt0Nh3m5VfEatMzXETjqTdvkiZf8AVOtkJMFE0sHHSWS3i5tgF19lt58dRK2Goj5F7jla4G7CeGU31abr5wreJhsETIYo5mtYALCIa9511JVc7b4jDUVbp6Vj2tcGk3blOccTYexS5Nb3ZLyyglJTv0LD2k3mupqqSnFM1+RwbmzkX0B4ZVjaLesyI8nTxCVwAzOJtGDbUC2rrdeiqzH6p0tQ97vWdlv13sAru2Q2JpqenZykLJJnNBe57Q7Ui5AvwA4JGUpXROPJlyykoul9iG0O+CYOHLU0Zb08mXBw8A64PwW3t5vBjfC6mijztngDhJmsW5rggttxFlxd7uAw008T4GCMStdma0WbdpGoHAXB+C+4KZnN58hY0vMuUPyjMBnGgdx601S3i2RryXKDfJHC2I2q/s+WSTk+UzsDbZsttb34FWlBvIg/BCrlYWuc57WRNIc5+XpB0sO9RPcxh8cslQZY2PAawDM0OtcnhcKMbeVbZK6VrWhkcb+Ta1gAAANiQ0aXJuVEW4xspDJPHiTvn0/2S7/qpWSEmnomlg46SykeLm2AXY2Y3oxzythqIuRe45Q4G7L8LOvq3VfGEbw8Np4WQxxzNawAaRDXrJ9LUlV5tziUFTVmelY9rXNaTduU5xe5sPYpcmv5WXlllFalO/Q/RoKyuVsxUOkpKd775nRMJvxvYLqrc707VhERCQiIgCIiAIiIAiIgC1a+csYXAXt0LaXxJwN1TIm4tRdPo+3wJTpkWkq43auit3tJHw4IYonerIW/zj9Qvqetjcf7keIcQfgvJohPEPb7nL4Sc1kk7ljnfVpwf0Ufuz14pxWya+TPqswYVDBFPGJozoHXs5ne1w9Jq08KwcUUJjglLgyVxd0H0rAZug2ta66lLTsvmZNw1tazjbW1l4VMwbJyzReOQG4+Bae/pXqeNKPDU20m9nq1OK7xaqVKVWnfM8/NCDyalz91fM8pH5SJo/VOjm9APS09x6FrYpBLJlbAA2Ajg30Q09PKH5L2cOTd+9G4f5m9fiF85jGSPWY4cOh4K5IZ9Dkp7Rb8yXR87XLyz2v6b1emLI8UrX1OSZmQ+hCc8p0MnQO6MfqpVsrg5haZJPXf0fujjbxXxs5hlOCZGXc/qdxZ3D6qSBe9wHCp1mbVfxS3S9b5t+r35+5acVxaknCF0+bfN/0ipt9MZZPR1FrtbcHxa5r7e0X9ytGjqmyRtkYQ5rmhwI6QdVp7RYJFWQOgmGh1BHFpHBwUDoNksXo7x0lXG6K+gf0f0uBt7CvTqm3R49Shkbq0/oSLefirYaCVpPpyjk2DpN+JHgLqqamhccGimAuGVEgPcHAAH3gKxG7Czysllq6kTVL43MjuCIocw4hvX32XU2U2T5ChdRVOSUOc8uy3sQ63XrdQ4uT35UUnjlkluq2OtsviTailhlYbgsaD3ECxB9q611WUGwuIUT3HDqxvJuN+TkHzFi0nv0W0/Ccdm9GSshib0mMel8G/qrKTS3RpHJNKnF2cbeg++K0Q/d5M/wD23/ReOzVC7GqmaeskcYonANhBIGtyBpwAHHpKkuP7EzT11PVCVmSIRAh2YudkNz71qHYmspaiSfDZ42sk4xSA243twIIGtuBCppdu+RlLHJzbatXy77bE2wvA6enFoIY4+9rQD7XcSqcqaYzVuLZdSI5Tp3OYfkFZeBwYqZmuq5KcRAG7Ygczj0XJHD2rR2U2OlpqyoqZZGPbNns0A3GZ2bW+nDRWktVF5xc0klS/4V5umxeOnrbSuDWysLA46AOuCAT0X1+CuzEcVhgjdLLI1rAL3uNe4dZKrjaLdNne59JK1rXEkxvvZv8AK4dHcQvDB900pe01c7SwfkYXEnuzHRvsCrHVHy0Z4lmxrRpv1K/ra78TWOmItyswdbqBcLD3WW7tJCabEZMw9SUSAH8wzB48bheVY1n9olsYAYKkNaBwAEgaAFdG2uxMVeA6/JzNFmvAuCOpw6RdZqDlfvOfHjlOMq5p/wBncwurhqImyxZHNcAbgDTuPUVsSCNtswYLmwvYXPV3qnmbs8ThJ5CdgB6WSyR38QAuxsxu8q46qKpqp2uEbs2XM97ibEDV2gWynLsdiy5HVwIDjtn4nIP3qm3+sBfo9nAeCqb/AKX1P4oVBnity4lIs+9s+e3DjbRWyExpq7HDwlFycurKf35P/bUzf4Hn3kD9Fq1Po7ORfxTfq76KWbwdiJq+aOSOWNjWR5bOzXJzE9HsW03YkuwpuHyPGdt3B7QS0OuXA2OpGtlVxbbM54pvJN1zWxGdxkrQalpIzHIQOkgZtfioXtZEafEpri4bPyg6bguDx8F327qq9rvRfDbhmD3D4AXUtqd2kctHDE9+WojaRyrQSHEkuIcD6wufFVqTjVGfh5JY1HTVExwirgqImzRZHNcAdA3TuPUQtmVsTbZgwX0F7C/cFTzN2WJQk8hOwA9LJZI7+IAXW2b3eVjKqKoqp2uEbg7Lme9xI4anTitFOT6HQsmR0nAtQCyysBZWh0hERAEREAREQBERAEREAWCFlYQEexGDK8kwgt6CLj32Xgx1P0tePAgqTkLzdA08Wj3BeHm/R9WRzi47vlKCdfFU/qdcOJpU0/g/xHCpn0zXBwc647vYvCSINe6F2jH6sJ6D0Hw6FJGwtHBo9wWpiuHiVtho4eqf08FE/wBNnHC9KjqTtKK0pp+0nu+a929Gc8qk+vxdkfhbe8Emhv6JP5XdXgV4NNrxyXAv7Wnr8Ote7m5/2b/RlboCfzdTSfkVh95PRI/at073DqPePivBlG4+XptG+bXWEl/kunfpzTCNf0o3Ag2PEEdX6hS3CqzlYw4ix4HxXEwWnzl0cjLtAuOPonqBUhpqZsbcrBYf8617P6Lw+WDeROoNey7u0/VfXm+u5Sbs90RF9EZmEWUQBERAYWURAFhZRAU3WbzK2lnkjmiY9rZHhuZro3EAm2o0OltbLWxTe5PIwsiijiJFs+YvI8AQBdXPJC12jmh3iAVrjCYAbiCIHryNv8lnol3OV4cnLX+fco3d3sxNVVUczmOEMbhI57gbOIOYAE+sSbFX+FhrQOC+laMVFGuHEsapBYWUVjUwiyiAxZFlEBhLLKIAsWWUQBERAEREAREQBERAEREAREQBERAEREAWFlEBo1uGsl9Ya9Y0K9m0zRY2BIFgTx962FhYeBjU3NRVvm+9fnvJsBZRFuQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==').build().then( img => {
    pdf.add(
      
      pdf.header(img)
    );
    
    
});

    pdf.footer('>   ESTE DOCUMENTO PUEDE SER DEVUELTO POR DIFERENTES INCUMPLIMIENTOS EN SUS DATOS.   <');

    pdf.create().open();

  }

}
