import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor() { }

  @HostBinding('style.color') color: string;

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    let keyCode = $event.key

    switch (keyCode) {
      case 'ArrowUp':
        this.color = 'orange';
        break;
      case 'ArrowDown':
        this.color = 'blue';
        break;
      case 'ArrowRight':
        this.color = 'green';
        break;
      case 'ArrowLeft':
        this.color = 'purple';
        break;
    }
  }

}
