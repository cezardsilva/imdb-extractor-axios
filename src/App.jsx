import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { fetchMovieData } from "./services/imdbApi";

export default function App() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbIdFromUrl = urlParams.get("id");

    if (imdbIdFromUrl) {
      handleSearch(imdbIdFromUrl);
    }
  }, []);

  const handleSearch = async (imdbId) => {
    setLoading(true);
    setError(null);
    setMovie(null);

    try {
      const data = await fetchMovieData(imdbId);

      if (data?.data?.title) {
        setMovie(data.data.title);
      } else {
        throw new Error("Dados do filme não encontrados");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />

      {loading && <div className="loading">Carregando dados...</div>}

      {error && <div className="error">Erro: {error}</div>}

      {movie && <MovieCard movie={movie} />}
    </div>
  );
}
