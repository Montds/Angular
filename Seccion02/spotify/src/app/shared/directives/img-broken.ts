import {Directive, HostListener, inject} from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: 'img[appImgBroken]',
  standalone: true,
})
export class ImgBroken {

  private elHost = inject(ElementRef);

  @HostListener("error") handleError():void
  {
      console.log("⚠️ la imagen no puedo cargar " ,this.elHost);
      const elementHTML = this.elHost.nativeElement;
      elementHTML.src="images/imgbroken.png";
 }

}
