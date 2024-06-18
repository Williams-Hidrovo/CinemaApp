import {Movie} from '../../core/entities/movie.entity';
import type {Result} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDbResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/original${result.poster_path}`,
      backDrop: `https://image.tmdb.org/t/p/original${result.backdrop_path}`,
    };
  }
}
