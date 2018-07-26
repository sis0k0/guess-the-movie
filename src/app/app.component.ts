import { Component } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

import { Movie } from './movie';

@Component({
  selector: 'gtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guess the movie!';
  finished: boolean;
  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  endGame() {
    this.finished = true;
  }

  private loadMovies() {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
    });
  }
}
