import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { Movies } from './movies.model';

@Component({
  selector: 'app-table-list-movies',
  templateUrl: './table-list-movies.component.html',
  styleUrls: ['./table-list-movies.component.less'],
})
export class TableListMoviesComponent implements OnInit {
  constructor(private readonly _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getListMovies()
  }

  movies: Movies[] = [];

  getListMovies(): Subscription {
    return this._moviesService.getMovies().subscribe((movieList) => {
      this.movies = movieList;
      console.log(this.movies)
    });
  }
}
