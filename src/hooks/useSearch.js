import { useEffect, useState, useRef } from "react";


//Forma controlada con react
export function useSearch() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const isFirstInput = useRef(true);


  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return
    }
    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (query.length < 3) {
      setError("La pelicula no puede tener menos de tres caracteres");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se pueden buscar peliculas con números");
      return;
    }

    setError(null);
  }, [query]);

  return { query, setQuery, error };
}

//Esta es la manera con javascript (forma no controlada). Se recomienda esta por presentar menos posibilidad de errores y se aprende mas JS.
/**
   * const handleSubmit = (event) => {
     event.preventDefault()
     const { query } = Object.fromEntries(
     new window.FormData(event.target)
        )
     console.log(query)
} */
