import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
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
      title: 'Breakfast at Tiffany\'s',
      gif: 'assets/tiffanys.gif',
    },

    {
      title: 'Eternal sunshine of the spotless mind',
      gif: 'assets/eternalsunshine.gif',
    },

  ];

  getAll(): Observable<any> {
    return of(this.movies);
  }
}
