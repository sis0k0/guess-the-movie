import { Component } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guess the movie!';
  movie: any;
  guessed: boolean;
  finished: boolean;
  private movies: any;
  private currentIndex: number;

  constructor(private movieService: MovieService) {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      this.updateMovie(0);
    });
  }

  markAsGuessed() {
    this.guessed = true;
  }

  loadNextMovie() {
    this.updateMovie();
  }

  private updateMovie(index = this.currentIndex + 1) {
    if (index === this.movies.length) {
      this.finished = true;
    } else {
      this.guessed = false;
      this.movie = this.movies[index];
      this.currentIndex = index;
    }
  }
}
