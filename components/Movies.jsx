export function ListOfMovies ({ movies }) {
    return (
      <ul className="movies">
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.id} />
          </li>
        ))}
      </ul>
    );
  };

  export function NotRendeMovies () {
    return <p>No hay imagen para mostrar</p>;
  };

 export function Movies ({ movies }) {
  const hasMovie = movies.length > 0;
    return(
        hasMovie ? <ListOfMovies movies={ movies } />: <NotRendeMovies/>
    )
  }