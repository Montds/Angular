import {Directive, HostListener} from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: 'img[appImgBroken]',
  standalone: true,
})
export class ImgBroken {

  //manejar el error de la carga de imagenes

  //host
  constructor(private elHost: ElementRef) {
    console.log( elHost);
  }
  //se carga la imagen url en caso de que no cargue
  @HostListener("error") handleError():void{
    console.log("⚠️ la imagen no puedo cargar " ,this.elHost);
    const elNative = this.elHost.nativeElement;
    elNative.src="images/imgbroken.png";
}


}
