import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularDBResponse, TopRatedMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

export const moviesTopRatedUseCase = async (
  fecher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fecher.get<TopRatedMoviesResponse>('/top_rated');
    return topRated.results.map(MovieMapper.fromMovieDbResultToEntity)
  } catch (error) {
    console.log(error);
    throw new Error('Error feching movies - Top rated');
  }
};
