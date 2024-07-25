import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

export function App() {
const { movies: mappetMovie } = useMovies()
  return (
    <div className="content">
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" className="form">
          <input type="text" placeholder="Introduce el nombre de tu pelicula" />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappetMovie}/>
      </main>
    </div>
  );
}
