import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'gtm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() endGame = new EventEmitter();
  movie: any;
  guessed: boolean;
  private currentIndex: number;

  constructor() { }

  ngOnInit() {
    this.loadFirstMovie();
  }

  markAsGuessed() {
    this.guessed = true;
  }

  loadNextMovie() {
    this.updateMovie();
  }

  private loadFirstMovie() {
    this.updateMovie(0);
  }

  private updateMovie(index = this.currentIndex + 1) {
    if (index === this.movies.length) {
      this.endGame.emit();
    } else {
      this.guessed = false;
      this.movie = this.movies[index];
      this.currentIndex = index;
    }
  }
}
