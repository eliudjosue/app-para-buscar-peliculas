import { useState } from 'react';
import WhitResults from '../../mocks/whitResults.json';
import withoutResults from '../../mocks/whitoutResult.json';

export function useMovies ({ query }) {
  const [resposeMovies, setResponseMovies] = useState([])

    const movies = resposeMovies.Search;

    const mappetMovies = movies?.map(movie => ({
      id:movie.imdbID,
      title:movie.Title,
      poster:movie.Poster,
      year:movie.Year,
    }))

    const getMovies = () => {
      if (query) {
        setResponseMovies(WhitResults)
      } else {
        setResponseMovies(withoutResults)
      }
    }

    return { movies: mappetMovies, getMovies}
}