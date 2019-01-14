import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      title: 'Hidden figures',
      gif: 'assets/hidden-figures.gif',
    },

    {
      title: 'Colette',
      gif: 'assets/colette.gif',
    },

    {
      title: 'Bandersnatch',
      gif: 'assets/bandersnatch.gif',
    },

    {
      title: 'Driving Miss Daisy',
      gif: 'assets/miss-daisy.gif',
    },

    {
      title: 'Fried Green Tomatoes',
      gif: 'assets/towanda.gif',
    },

  ];

  getAll(): Observable<Movie[]> {
    return of(this.movies);
  }
}
