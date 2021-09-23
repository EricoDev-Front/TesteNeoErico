import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies } from '../table-list-movies/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movies: Movies[] = [];

  constructor(private readonly _htpp: HttpClient) {}

  public getMovies(): Observable<Array<Movies>> {
    const moviesArray: any[] = [];

    return of(require('../data/FILMES.json')).pipe(
      map((response: any) => {
        response.movies.map((movie: any) => {
          const listaMovies = new Movies();
          Object.assign(listaMovies, movie);
          moviesArray.push(listaMovies);
        });
        return moviesArray;
      })
    );
  }
}
