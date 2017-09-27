import { Injectable } from '@angular/core';

interfaz movies {
  id: Number,
  title: String,
  poster: String,
  synopsis: String,
  generes: Array<String>,
  year: Number,
  director: String,
  actors: Array<String>,
  hours: Array<String>,
  room: Number
}

@Injectable()
export class CinemaService {

  movies: Array<movies>

  constructor() { }

  getMovies() {
    return this.movies
  }

  getMovies(id): Number {
    return this.movies.id
  }

}
