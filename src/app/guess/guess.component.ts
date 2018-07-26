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
  @Output() guessed = new EventEmitter<boolean>();

  private static sanitize(text: string) {
    return text.replace(/[^\w]/gi, '').toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.movieControl = new FormControl();
    this.movieControl.valueChanges.subscribe(value => {
      const actual = GuessComponent.sanitize(value);
      const expected = GuessComponent.sanitize(this.movie.title);

      if (actual === expected) {
        this.guessed.emit(true);
        this.movieControl.setValue('');
        // this.movieControl.disable();
      }
    });
  }

}
