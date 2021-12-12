import {
  Container,
  ContainerInner,
  ImageBox,
  DescriptionBox,
  RatingBox,
  MovieImage,
  MovieTitleBox,
  MovieDescriptionBox,
  MovieCastBox,
  MovieReleaseDateBox,
  RatingValueBox,
  RatingValueInner,
  RatingValue,
  RatingCount,
  RatingValueMax,
  ActorParagraph,
  RateBox,
  RateButton,
  RatingInnerBox
} from './style';
import { ReactComponent as StarImage } from '../../../../../../assets/images/star.svg';
import { Props } from './interface';
import { useMemo, useState } from 'react';
import { formatDate } from '../../../../../../util/formatDate';
import { message, Rate } from 'antd';
import { postRating } from '../../../../../../service/movies.service';

export const Movie: React.FC<Props> = ({ movie }) => {
  const { title, description } = movie || {};
  const [isRateSectionOpen, setRaceSectionOpen] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);
  const [isPostRateRequestSent, setPostRateRequestSent] =
    useState<boolean>(false);

  const movieCastMemo = useMemo(() => {
    if (movie?.cast && movie?.cast?.length > 0) {
      return movie.cast.map((actor, index) => (
        <ActorParagraph
          key={index}
        >{`${actor.firstName} ${actor.lastName}`}</ActorParagraph>
      ));
    }
    return '';
  }, [movie]);

  const onOpenRateSection = () => {
    setRaceSectionOpen((raceSectionOpen) => !raceSectionOpen);
  };

  const onRateSelected: (starCount: number) => void = async (starCount) => {
    // Api Call - if endpoints were made
    // try {
    //    await postRatingApi({movieId: movie.id, numberOfStars: starCount);
    //    setRate(starCount);
    //    message.success('Ratings sent');
    // } catch (e) {
    //    console.error(e);
    //    message.error('Can\'t send ratings. Try again!');
    // }

    // Mocked functionality
    try {
      setPostRateRequestSent(true);
      setRate(starCount);
      await postRating({ movieId: '1', numberOfStars: starCount });
      setTimeout(() => {
        setPostRateRequestSent(false);
        setRaceSectionOpen(false);
      }, 1000);
      message.success('Thank you for your ratings!');
    } catch (e) {
      setPostRateRequestSent(false);
      console.error(e);
      message.error("Can't send ratings. Try again!");
    }
  };

  return (
    <Container>
      <ContainerInner>
        <ImageBox>
          <MovieImage src={movie?.coverImage}></MovieImage>
        </ImageBox>
        <DescriptionBox>
          <MovieTitleBox>{title}</MovieTitleBox>
          <MovieDescriptionBox>{description}</MovieDescriptionBox>
          <MovieCastBox>{movieCastMemo}</MovieCastBox>
          <MovieReleaseDateBox>
            {movie && movie.releaseDate ? formatDate(movie.releaseDate) : ''}
          </MovieReleaseDateBox>
        </DescriptionBox>
        <RatingBox>
          <RatingInnerBox>
            <StarImage width={30} height={30}></StarImage>
            <RatingValueBox>
              <RatingValue>
                <RatingValueInner>{movie?.averageRating}</RatingValueInner>
                <RatingValueMax>/ 5</RatingValueMax>
              </RatingValue>
              <RatingCount>
                {movie?.totalNumberOfRatings || '-'} votes
              </RatingCount>
            </RatingValueBox>
          </RatingInnerBox>
          <RateButton
            onClick={onOpenRateSection}
            isopen={isRateSectionOpen ? 1 : 0}
          >
            {isRateSectionOpen ? 'Close Rate' : 'Rate'}
          </RateButton>
        </RatingBox>
      </ContainerInner>
      {isRateSectionOpen && (
        <RateBox>
          <Rate
            disabled={isPostRateRequestSent}
            value={rate}
            count={5}
            onChange={onRateSelected}
          />
        </RateBox>
      )}
    </Container>
  );
};
