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
  private movies: any;
  private currentIndex: number;

  constructor(private movieService: MovieService) {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      this.updateCurrentMovie(0);
    });
  }

  updateCurrentMovie(index = this.currentIndex + 1) {
    this.movie = this.movies[index];
    this.currentIndex = index;
  }
}
