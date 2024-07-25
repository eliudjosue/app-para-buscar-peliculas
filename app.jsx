import './App.css'
import mockWhitResult from "./mocks/whitResult.json";
export function App() {
  const movies = mockWhitResult.Search;
  const hasMovie = movies.length > 0;
  return (
    <div className="content">
      <header>
        <input type="text" placeholder="Introduce el nombre de tu pelicula"/>
        <button>Buscar</button>
      </header>
      <main>
        {hasMovie ? (
          <ul className='movies'>
            {movies.map((movie) => (
              <li key={movie.imdbID} className='movie'>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.alt} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay imagen para mostrar</p>
        )}
      </main>
    </div>
  );
}
