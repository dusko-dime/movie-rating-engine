import movieDB from '../db/movies/movies';
import { Type } from '../db/movies/structure';
import Settings from '../config/settings';
import api from './base.service';

interface FetchMoviesReqParam {
  searchText?: string;
  searchOffset?: number;
  tvShowsMode?: boolean;
}

interface PostRatingReqParam {
  movieId: string;
  numberOfStars: number;
}

interface KnownPhraseItem {
  key: string;
  regexTest: string;
}

enum PhraseKeys {
  NumberOfStars = 'NumberOfStars',
  AtLeastNumberOfStars = 'AtLeastNumberOfStars',
  AfterYear = 'AfterYear',
  OlderThan = 'OlderThan'
}

const KnownPhrases: KnownPhraseItem[] = [
  {
    key: PhraseKeys.AtLeastNumberOfStars,
    regexTest: 'at least [+-]?([0-9]*[.])?[0-9]+ stars'
  },
  {
    key: PhraseKeys.NumberOfStars,
    regexTest: '[+-]?([0-9]*[.])?[0-9]+ stars'
  },
  {
    key: PhraseKeys.AfterYear,
    regexTest: 'after [0-9]*'
  },
  {
    key: PhraseKeys.OlderThan,
    regexTest: 'older than [0-9]* years'
  }
];

// Endpoint logic is mocked here
export const fetchMovies = async ({
  searchText,
  searchOffset,
  tvShowsMode
}: FetchMoviesReqParam) => {
  return new Promise((resolve, reject) => [
    setTimeout(() => {
      let filteredMovies = movieDB;

      if (tvShowsMode)
        filteredMovies = filteredMovies.filter(
          (movie) => movie.type === Type.SHOW
        );
      else
        filteredMovies = filteredMovies.filter(
          (movie) => movie.type === Type.MOVIE
        );

      if (searchText) {
        let knownPhraseFound = false;
        KnownPhrases.forEach((knownPhrase) => {
          let doesMatchTest = searchText
            .toLowerCase()
            .match(knownPhrase.regexTest);

          if (doesMatchTest && !knownPhraseFound) {
            knownPhraseFound = true;
            let searchNumber = parseFloat(searchText.replace(/[^0-9]/g, ''));

            switch (knownPhrase.key) {
              case PhraseKeys.AtLeastNumberOfStars:
                // @ts-ignore
                searchNumber = parseFloat(
                  searchText.match(/[+-]?([0-9]*[.])?[0-9]+/g)[0]
                );
                filteredMovies = filteredMovies.filter(
                  (movie) => movie.averageRating >= searchNumber
                );
                break;
              case PhraseKeys.NumberOfStars:
                // @ts-ignore
                searchNumber = parseFloat(
                  searchText.match(/[+-]?([0-9]*[.])?[0-9]+/g)[0]
                );
                filteredMovies = filteredMovies.filter(
                  (movie) => movie.averageRating === searchNumber
                );
                break;
              case PhraseKeys.AfterYear:
                const searchDate = new Date(searchNumber, 0);
                filteredMovies = filteredMovies.filter((movie) => {
                  return movie.releaseDate.getTime() > searchDate.getTime();
                });
                break;
              case PhraseKeys.OlderThan:
                const currentTime = new Date();
                filteredMovies = filteredMovies.filter((movie) => {
                  const movieReleaseDatePlusOffset = new Date(
                    movie.releaseDate.getFullYear() + searchNumber,
                    movie.releaseDate.getMonth(),
                    movie.releaseDate.getDay()
                  );
                  return (
                    movieReleaseDatePlusOffset.getTime() < currentTime.getTime()
                  );
                });
                break;
              default:
                knownPhraseFound = false;
            }
          }
        });

        if (!knownPhraseFound) {
          filteredMovies = filteredMovies.filter((movie) => {
            if (
              movie.title &&
              movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
              return true;
            if (
              movie.description &&
              searchText
                .toLowerCase()
                .split(' ')
                .every((word) => movie.description.split(' ').includes(word))
            )
              return true;
            if (movie.cast) {
              const actorNames = movie.cast.map(
                (actor) => actor.firstName + ' ' + actor.lastName
              );
              let actorNameMatch = false;
              actorNames.forEach((actorName) => {
                if (actorName.toLowerCase().includes(searchText.toLowerCase()))
                  actorNameMatch = true;
              });
              if (actorNameMatch) return true;
            }
            return false;
          });
        }
      }

      filteredMovies.sort((a, b) => b.averageRating - a.averageRating);

      if (searchOffset) {
        filteredMovies = filteredMovies.slice(
          searchOffset,
          searchOffset + Settings.moviesLoadingStep
        );
      } else
        filteredMovies = filteredMovies.slice(0, Settings.moviesLoadingStep);

      resolve(filteredMovies);
    }, 1000)
  ]);
};

export const postRating = async ({
  movieId,
  numberOfStars
}: PostRatingReqParam) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

// ----------------------------------------------------------------------------------------------------
// This is how, probably, API calls would look like if they were made...
// ----------------------------------------------------------------------------------------------------
export const getMoviesApi = async ({
  searchText,
  searchOffset,
  tvShowsMode
}: FetchMoviesReqParam) => {
  return api.service().get('/movies', {
    params: {
      searchText,
      searchOffset,
      tvShowsMode: tvShowsMode ? 1 : 0
    }
  });
};

export const postRatingApi = async ({
  movieId,
  numberOfStars
}: PostRatingReqParam) => {
  return api.service().post(`/movies/${movieId}/rate`, {
    numberOfStars
  });
};
