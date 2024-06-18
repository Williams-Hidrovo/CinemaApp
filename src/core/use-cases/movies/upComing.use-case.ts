import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingMoviesDB} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const UpComingUseCase = async (
  fecher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fecher.get<UpcomingMoviesDB>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error feching movies - UpComing');
  }
};
