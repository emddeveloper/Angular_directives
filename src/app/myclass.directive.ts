import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyclass]',
})
export class MyclassDirective {
  constructor(private element: ElementRef) {}

  @Input('appMyclass') set backgroundcolor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
