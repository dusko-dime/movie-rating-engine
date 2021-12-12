import React, { useMemo } from 'react';
import { Props } from './MovieList.interface';
import { Container, InnerContainer } from './style';
import Movie from './components/Movie';
import { EmptyMessage } from '../../../../components/EmptyMessage/EmptyMessage';
import noResultsIcon from '../../../../assets/images/no-results.png';

export const MovieList: React.FC<Props> = ({ movies }) => {
  const moviesJsx = useMemo(() => {
    if (movies && movies.length > 0) {
      return movies.map((movie) => {
        return <Movie movie={movie} />;
      });
    }
    return (
      <EmptyMessage
        title="No search results"
        icon={
          <img alt="no-results" src={noResultsIcon} width={40} height={40} />
        }
      ></EmptyMessage>
    );
  }, [movies]);

  return (
    <Container>
      <InnerContainer>{moviesJsx}</InnerContainer>
    </Container>
  );
};

export default MovieList;
