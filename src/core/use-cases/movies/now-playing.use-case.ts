import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fecher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fecher.get<MovieResponse>('/now_playing');
    return nowPlaying.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error feching movies - now playing');
  }
};
