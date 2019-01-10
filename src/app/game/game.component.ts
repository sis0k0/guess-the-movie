import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gtm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private movies: Movie[];
  private currentMovieIndex: number;
  guessControl: FormControl;
  title = 'Guess the movie!';
  currentMovie: Movie;
  currentMovieGuessed = false;
  finished = false;

  private static sanitize(text: string) {
    return text.replace(/[^\w]/gi, '').toLowerCase();
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.guessControl = new FormControl();
    this.guessControl.valueChanges.subscribe(value => {
      this.checkIfGuessed(value);
    });
    this.loadMovies();
  }

  checkIfGuessed(value: string) {
    const actual = GameComponent.sanitize(value);
    const expected = GameComponent.sanitize(this.currentMovie.title);

    if (actual === expected) {
      this.disableGuesser();
    }
  }

  loadNextMovie() {
    this.updateMovie();
  }

  private loadFirstMovie() {
    this.updateMovie(0);
  }

  private loadMovies() {
    this.movieService.getAll().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.loadFirstMovie();
    });
  }

  private updateMovie(index = this.currentMovieIndex + 1) {
    if (index === this.movies.length) {
      this.endGame();
    } else {
      this.currentMovie = this.movies[index];
      this.currentMovieIndex = index;
      this.enableGuesser();
    }
  }

  private endGame() {
    this.finished = true;
  }

  private enableGuesser() {
    this.reset();
    this.guessControl.enable();
    this.currentMovieGuessed = false;
  }

  private disableGuesser() {
    this.reset();
    this.guessControl.disable();
    this.currentMovieGuessed = true;
  }

  private reset() {
    this.guessControl.setValue('');
  }
}
