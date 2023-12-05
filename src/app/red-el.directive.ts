import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEL]'
})
export class RedELDirective {
  
  constructor(el:ElementRef) {
    el.nativeElement.value = 'bla';
   }

}
