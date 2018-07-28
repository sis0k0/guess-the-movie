import {
  Directive,
  EventEmitter,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

import { explode as nsExplode } from 'nativescript-explosionfield';

@Directive({
  selector: '[gtmExplode]'
})
export class ExplodeDirective {
  @Input() boom: Subject<boolean>;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.boom.subscribe(_ => this.explode());
  }

  private explode() {
    nsExplode(this.element.nativeElement);
  }
}
