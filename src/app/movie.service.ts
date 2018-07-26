import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      title: 'Breakfast at Tiffany\'s',
      gif: 'https://media1.giphy.com/media/xvLGczTABDig0/giphy.gif',
    },

    {
      title: 'Eternal sunshine of the spotless mind',
      gif: 'https://media2.giphy.com/media/FFjKtEurSKfny/giphy.gif',
    },

  ];

  getAll(): Observable<any> {
    return of(this.movies);
  }
}
