import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [

    {
      title: 'Guardians of the galaxy',
      gif: 'assets/groot.gif',
    },

    {
      title: 'The Godfather',
      gif: 'assets/marlon.gif',
    },

    {
      title: 'Avatar',
      gif: 'assets/avatar.gif',
    },

    {
      title: 'Eternal sunshine of the spotless mind',
      gif: 'assets/eternalsunshine.gif',
    },

    {
      title: 'Bandersnatch',
      gif: 'assets/bandersnatch.gif',
    },
  ];

  getAll(): Observable<Movie[]> {
    return of(this.movies);
  }
}
