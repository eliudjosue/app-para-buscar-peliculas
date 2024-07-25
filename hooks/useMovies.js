import mockWhitResult from "../mocks/whitResult.json";

export function useMovies () {
    const movies = mockWhitResult.Search;
    const mappetMovie = movies?.map(movie => ({
      id:movie.imdbID,
      title:movie.Title,
      poster:movie.Poster,
      year:movie.Year,
    }))
    return { movies: mappetMovie}
}