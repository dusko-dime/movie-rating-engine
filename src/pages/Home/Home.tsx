import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import {
  HomeContainer,
  FiltersBox,
  SearchBox,
  TopMoviesSwitchBox,
  TopMoviesLabel,
  TopMoviesSwitch,
  SearchInput,
  MoviesBox,
  LoadMoreButtonBox,
  LoadMoreButton
} from './style';
import MovieList from './components/MovieList/MovieList';
import { useMoviesStateValue } from '../../context/MoviesContext';
import { useAppStateValue } from '../../context/AppContext';
import { AppLoader } from '../../components/UIComponents/AppLoader';
import { fetchMovies } from '../../service/movies.service';
import { Movie } from '../../db/movies/structure';
import Settings from '../../config/settings';
import { message } from 'antd';

const offsetIncreaseStep = Settings.moviesLoadingStep;

const Home = () => {
  const { movies, setMovies } = useMoviesStateValue();
  const { isLoading, setAppLoading, setError } = useAppStateValue();
  const [searchText, setSearchText] = useState<string>('');
  const [searchOffset, setSearchOffset] = useState<number>(0);
  const [isShowFilterActive, setShowFilterActive] = useState<boolean>(false);
  const requestIdCounter = useRef(1);
  const [moreItemsExist, setMoreItemsExist] = useState(true);
  const allowTextSearchRequest = useRef(true);

  useEffect(() => {
    if (allowTextSearchRequest.current) {
      fetchMovieSearchResults();
      setSearchOffset(0);
      setMoreItemsExist(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    fetchMovieSearchResults();
    setSearchOffset(0);
    setMoreItemsExist(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowFilterActive]);

  useEffect(() => {
    loadMoreMovieSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOffset]);

  const onShowSwitchChangeValue: (checked: boolean) => void = (checked) => {
    setShowFilterActive(checked);
  };

  const onLoadMoreClick: () => void = () => {
    setSearchOffset((offset) => offset + offsetIncreaseStep);
    setAppLoading(false);
    // setError({
    //     text: 'Can\'t load data!'
    // });
  };

  const fetchMovieSearchResults: () => void = async () => {
    try {
      requestIdCounter.current += 1;
      const requestId = requestIdCounter.current;
      setAppLoading(true);
      const data = await fetchMovies({
        searchText:
          searchText && searchText.length > 1 ? searchText : undefined,
        searchOffset,
        tvShowsMode: isShowFilterActive
      });
      if (requestId === requestIdCounter.current) {
        setMovies(data as Movie[] | null);
        setAppLoading(false);
      }
    } catch (e) {
      setAppLoading(false);
      setMovies(null);
      setError({
        text: "Can't load data!"
      });
      console.error(e);
    }
  };

  const loadMoreMovieSearchResults: () => void = async () => {
    try {
      requestIdCounter.current += 1;
      const requestId = requestIdCounter.current;
      let data = await fetchMovies({
        searchText:
          searchText && searchText.length > 1 ? searchText : undefined,
        searchOffset,
        tvShowsMode: isShowFilterActive
      });
      if (requestId === requestIdCounter.current) {
        let newMovies: Movie[] | null = [];
        if (data) {
          if (movies) newMovies = [...movies, ...(data as Movie[])];
          else newMovies = data as Movie[];
        } else newMovies = movies as Movie[] | null;
        setMovies(newMovies);
        if (searchOffset > 0) {
          // @ts-ignore
          const moreMoviesToLoad: boolean = !!(data && data?.length === 0);
          setMoreItemsExist(moreMoviesToLoad);
          // @ts-ignore
          if (data?.length === 0) {
            setMoreItemsExist(false);
            message.warn("Can't find more movies to load");
          }
        }
      }
    } catch (e) {
      setMovies(null);
      setAppLoading(false);
      setError({
        text: "Can't load data!"
      });
      console.error(e);
    }
  };

  const onChangeSearchValue = (e: any) => {
    if (
      (searchText.length === 1 && e.target.value.length === 0) ||
      (searchText.length === 0 && e.target.value.length === 1)
    ) {
      allowTextSearchRequest.current = false;
      setSearchText(e.target.value);
    } else {
      allowTextSearchRequest.current = true;
      setSearchText(e.target.value);
    }
  };

  return (
    <HomeContainer>
      <Header></Header>
      <FiltersBox>
        <SearchBox>
          <SearchInput
            onChange={onChangeSearchValue}
            value={searchText}
            placeholder="Search movie..."
          />
        </SearchBox>
        <TopMoviesSwitchBox>
          <TopMoviesLabel>See TV Shows only?</TopMoviesLabel>
          <TopMoviesSwitch
            checked={isShowFilterActive}
            onChange={onShowSwitchChangeValue}
          />
        </TopMoviesSwitchBox>
      </FiltersBox>
      <MoviesBox>
        {isLoading ? (
          <AppLoader />
        ) : (
          <>
            <MovieList movies={movies} />
            <LoadMoreButtonBox>
              {moreItemsExist && (
                <LoadMoreButton onClick={onLoadMoreClick}>
                  Load more
                </LoadMoreButton>
              )}
            </LoadMoreButtonBox>
          </>
        )}
      </MoviesBox>
    </HomeContainer>
  );
};

export default Home;
