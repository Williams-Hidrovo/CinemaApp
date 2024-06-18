import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularDBResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

export const moviesPopularUseCase = async (
  fecher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fecher.get<PopularDBResponse>('/popular');
    return popular.results.map(MovieMapper.fromMovieDbResultToEntity)
  } catch (error) {
    console.log(error);
    throw new Error('Error feching movies - popular');
  }
};
