import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'gtm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private movies: Movie[];
  private currentMovieIndex: number;
  title = "Guess the movie!";
  currentMovie: Movie;
  currentMovieGuessed: boolean;
  finished: boolean;

  private static sanitize(text: string) {
    return text.replace(/[^\w]/gi, '').toLowerCase();
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  checkIfGuessed(value: string) {
    const actual = GameComponent.sanitize(value);
    const expected = GameComponent.sanitize(this.currentMovie.title);

    if (actual === expected) {
      this.currentMovieGuessed = true;
    }
  }

  loadNextMovie() {
    this.updateMovie();
  }

  private loadFirstMovie() {
    this.updateMovie(0);
  }

  private loadMovies() {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      this.loadFirstMovie();
    });
  }

  private updateMovie(index = this.currentMovieIndex + 1) {
    if (index === this.movies.length) {
      this.finished = true;
    } else {
      this.currentMovie = this.movies[index];
      this.currentMovieIndex = index;
      this.currentMovieGuessed = false;
    }
  }
}
