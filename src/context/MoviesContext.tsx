import React, { useEffect, useState, ReactNode, FC } from 'react';
import { Movie } from '../db/movies/structure';
import { fetchMovies as fetchMoviesApi } from '../service/movies.service';
import { useAppStateValue } from './AppContext';

type Props = {
  children: ReactNode;
};

type MoviesContextProps = {
  movies: Movie[] | null;
  setMovies: (movies: Movie[] | null) => void;
};

export const MoviesContext = React.createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

export const MoviesConsumer = MoviesContext.Consumer;

const MoviesProvider: FC<Props> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const { setAppLoading, setError } = useAppStateValue();

  const state: MoviesContextProps = {
    movies,
    setMovies
  };

  const fetchMovies = async () => {
    try {
      setAppLoading(true);
      const moviesData = await fetchMoviesApi({});
      setMovies(moviesData as Movie[]);
      setAppLoading(false);
    } catch (e) {
      console.error(e);
      setMovies(null);
      setAppLoading(false);
      setError({
        text: "Can't load data!"
      });
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider value={state}>{children}</MoviesContext.Provider>
  );
};

export const useMoviesStateValue = () => React.useContext(MoviesContext);

export default MoviesProvider;
