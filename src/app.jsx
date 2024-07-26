import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";


export function App() {
  const { query, setQuery, error} = useSearch();
  const { movies, getMovies } = useMovies({ query });


  const handleSubmit = (event) => {
    event.preventDefault();
   getMovies()
  };

  const hadleChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(event.target.value);
  };



  return (
    <div className="content">
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="Introduce el nombre de tu pelicula"
            onChange={hadleChange}
            value={query}
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <button>Buscar</button>
        </form>
        {error && (
          <p
            style={{ color: "red", display: "flex", justifyContent: "center" }}
          >
            {error}
          </p>
        )}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
