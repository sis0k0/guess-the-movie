import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from '../movie';

@Component({
  selector: 'gtm-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  movieControl: FormControl;
  @Input() movie: Movie;
  @Input() enabled: EventEmitter<boolean>;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.movieControl = new FormControl();
    this.movieControl.valueChanges.subscribe(value => {
      this.valueChanged.emit(value);
    });

    this.enabled.subscribe(isEnabled => isEnabled ? this.enable() : this.disable());
  }

  private enable() {
    this.reset();
    this.movieControl.enable();
  }

  private disable() {
    this.reset();
    this.movieControl.disable();
  }

  private reset() {
    this.movieControl.setValue('');
  }
}
