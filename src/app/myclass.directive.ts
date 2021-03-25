import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyclass]',
})
export class MyclassDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
