import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: ${({ theme: { colors } }) => colors.primaryLight};
  background: radial-gradient(
    circle,
    ${({ theme: { colors } }) => colors.primaryLight} 0%,
    ${({ theme: { colors } }) => colors.primaryDark} 100%
  );
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  box-shadow: 0 5px 10px #00000029;
`;

export const TitleWord = styled.p`
  margin: 0;
  :first-letter {
    color: red;
  }

  :after {
    content: '\\00a0';
  }
`;
