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
import {ReactComponent as StarImage} from '../../../../../../assets/images/star.svg';
import {Props} from './interface';
import {useMemo, useState} from 'react';
import {formatDate} from '../../../../../../util/formatDate';
import {message, Rate} from 'antd';

export const Movie: React.FC<Props> = ({movie}) => {

    const {title, description} = movie || {};
    const [isRateSectionOpen, setRaceSectionOpen] = useState<boolean>(false);
    const [rate, setRate] = useState<number>(0);

    // const calculateRating = () => {
    //     if(movie && movie.ratings && movie.ratings.length > 0) {
    //         let totalStars = 0;
    //         movie.ratings?.forEach((rating) => {
    //             totalStars += rating.stars || 0;
    //         });
    //         return totalStars / movie.ratings.length;
    //     } return 0;
    // }

    const movieCastMemo = useMemo(() => {
        if(movie?.cast && movie?.cast?.length > 0) {
            return movie.cast.map((actor, index) => (
                <ActorParagraph key={index}>{`${actor.firstName} ${actor.lastName}`}</ActorParagraph>
            ))
        }
        return '';
    }, [movie]);

    const onOpenRateSection = () => {
        setRaceSectionOpen(raceSectionOpen => !raceSectionOpen);
    }

    const onRateSelected: (starCount: number) => void = (starCount) => {
        //TODO Api Call
        setRate(starCount);
        setTimeout(() => {
            setRaceSectionOpen(false);
        }, 2000)
        message.success('Thank you for your ratings!');
    }

    return (
        <Container>
            <ContainerInner>
                <ImageBox>
                    <MovieImage src={movie?.coverImage}></MovieImage>
                </ImageBox>
                <DescriptionBox>
                    <MovieTitleBox>
                        {title}
                    </MovieTitleBox>
                    <MovieDescriptionBox>
                        {description}
                    </MovieDescriptionBox>
                    <MovieCastBox>
                        {movieCastMemo}
                    </MovieCastBox>
                    <MovieReleaseDateBox>
                        {movie && movie.releaseDate ? formatDate(movie.releaseDate) : ''}
                    </MovieReleaseDateBox>
                </DescriptionBox>
                <RatingBox>
                    <RatingInnerBox>
                        <StarImage width={30} height={30}></StarImage>
                        <RatingValueBox>
                            <RatingValue>
                                {/*<RatingValueInner>{calculateRating()}</RatingValueInner>*/}
                                <RatingValueInner>{movie?.averageRating}</RatingValueInner>
                                <RatingValueMax>/ 10</RatingValueMax>
                            </RatingValue>
                            <RatingCount>
                                {movie?.ratings?.length || 0} votes
                            </RatingCount>
                        </RatingValueBox>
                    </RatingInnerBox>
                    <RateButton onClick={onOpenRateSection} isopen={isRateSectionOpen ? 1 : 0}>
                        {isRateSectionOpen ? 'Close Rate' : 'Rate'}
                    </RateButton>
                </RatingBox>
            </ContainerInner>
            {isRateSectionOpen && <RateBox>
                <Rate value={rate} count={10} onChange={onRateSelected}/>
            </RateBox>}
        </Container>
    )
}