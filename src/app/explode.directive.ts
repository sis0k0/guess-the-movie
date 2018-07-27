import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit
} from '@angular/core';

import { explode } from 'nativescript-explosionfield';

@Directive({
  selector: '[gtmExplode]'
})
export class ExplodeDirective implements OnInit {
  @Input() shouldExplode: EventEmitter<boolean>;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.shouldExplode.subscribe(_ =>
      explode(this.element.nativeElement)
    );
  }
}
