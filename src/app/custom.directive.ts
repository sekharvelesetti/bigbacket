import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele:ElementRef,private render:Renderer) { }
@HostListener('mouseover') mouseOver(){
this.render.setElementStyle(this.ele.nativeElement,'background','gray')
this.render.setElementStyle(this.ele.nativeElement,'font-size','20px')

}
 @HostListener('mouseout') mouseOut(){
 this.render.setElementStyle(this.ele.nativeElement,'background','white')
 this.render.setElementStyle(this.ele.nativeElement,'font-size','10px')

   }
}
