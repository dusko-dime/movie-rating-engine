import styled from 'styled-components';
import {AppButton} from '../../../../../../components/UIComponents/AppButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 140px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 4px #00000029;  
  margin-bottom: 20px;
  border-radius: 6px;
  padding-bottom: 6px;
  align-items: center;
  
  :last-of-type {
    margin-bottom: 5px;
  }   
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }   
`;

export const ImageBox = styled.div`
  width: 100px;
  max-width: 100px;
  height: 100%;
  max-height: 130px;
  flex: 3;
  padding: 2px;
  @media (max-width: 500px) {
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }  
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
  margin-top: 10px;
  margin-left: 14px;
`;

export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 3;
`;

export const MovieTitleBox = styled.div`
  font-weight: ${({theme: {fontWeights}}) => fontWeights.bold};
  @media (max-width: 500px) {
    text-align: center;
  }   
`;

export const MovieDescriptionBox = styled.div`
  font-size: 12px;
  @media (max-width: 500px) {
    text-align: center;
  }  
`;

export const MovieCastBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-style: italic;
  font-size: 14px;
  margin-top: 10px;
  @media (max-width: 500px) {
    text-align: center;
    justify-content: center;
  }  
`;

export const MovieReleaseDateBox = styled.div`
  @media (max-width: 500px) {
    text-align: center;
  }  
`;

export const StarIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const RatingValueBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  margin: 0 6px;
`;

export const RatingValueInner = styled.div`
  font-weight: ${({theme: {fontWeights}}) => fontWeights.bold};
  font-size: 16px;
  display: flex;
`;

export const RatingValueMax = styled.div`
  font-size: 12px;
  margin-left: 4px;
  min-width: 24px;
`;

export const RatingValue = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const RatingCount = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const ActorParagraph = styled.p`
  margin: 0 4px 0 0;
  
  :after {
    content: '/';
    margin-left: 4px;
  }
  
  :last-of-type {
    :after {
      content: '';
    }
  }
`;

export const RateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RateButton = styled(AppButton)<{isopen: number}>`
  &.ant-btn {
    background: #FFF;
    border: 1px solid ${({theme: {colors}}) => colors.primary};
    height: 12px;
    color: ${({isopen}) => isopen ? '#f50202' : '#0eb833'};
    
    &:active, &:hover, &:focus { 
      color: ${({isopen}) => isopen ? '#f50202' : '#0eb833'};
    }
  }
`;

export const RatingInnerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

