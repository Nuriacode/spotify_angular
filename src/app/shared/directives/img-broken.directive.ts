import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '../../../assets/images/img_broken.jpg';
  @HostListener('error') handlerror(): void{
    const elNative = this.elHost.nativeElement;
    console.log('Evento', this.elHost)
    elNative.src = this.customImg
  }

  constructor(private elHost: ElementRef) { 

  }
  
}
