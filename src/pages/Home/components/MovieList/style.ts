import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  visibility: hidden;
  height: calc(100vh - 250px);
  max-width: 100%;

  &:hover,
  &:focus {
    visibility: visible;
  }
`;

export const InnerContainer = styled.div`
  visibility: visible;
  padding: 10px;
`;
