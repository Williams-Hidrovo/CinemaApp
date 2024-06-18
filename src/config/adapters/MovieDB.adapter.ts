import {AxiosAdapter} from './http/axios.adapter';

export const MovieDbFecher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b5adea39cc50d040424edfedc8cc6ddb',
    language: 'es',
  },
});
