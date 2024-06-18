import {useEffect, useState} from 'react';
import {MovieDbFecher} from '../../config/adapters/MovieDB.adapter';
import {Movie} from '../../core/entities/movie.entity';
import {moviesNowPlayingUseCase} from '../../core/use-cases';
import {moviesPopularUseCase} from '../../core/use-cases/movies/popular.use-case';
import {moviesTopRatedUseCase} from '../../core/use-cases/movies/topRated.use-case';
import {UpComingUseCase} from '../../core/use-cases/movies/upComing.use-case';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = moviesNowPlayingUseCase(MovieDbFecher);
    const popularPromise = moviesPopularUseCase(MovieDbFecher);
    const topRatedPromise = moviesTopRatedUseCase(MovieDbFecher);
    const upComingPromise = UpComingUseCase(MovieDbFecher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);

    console.log(nowPlayingMovies);
  };

  return {isLoading, nowPlaying, popular, topRated, upComing};
};
