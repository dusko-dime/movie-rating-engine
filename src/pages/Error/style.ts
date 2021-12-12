import styled from 'styled-components';
import { AppButton } from '../../components/UIComponents/AppButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const CodeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  color: #f50707;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;

export const BackButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const BackButton = styled(AppButton)``;
