import React from 'react';
import { useAppStateValue } from '../../context/AppContext';
import {
  Container,
  CodeBox,
  TitleBox,
  BackButtonBox,
  BackButton
} from './style';
import { useHistory } from 'react-router-dom';

export const Error = () => {
  const { error, setError } = useAppStateValue();
  const history = useHistory();

  const goToHome = () => {
    setError(null);
    history.push('/home');
  };

  return (
    <Container>
      {error?.code && <CodeBox>{error.code}</CodeBox>}
      {error?.text && <TitleBox>{error.text || 'Error happened'}</TitleBox>}
      <BackButtonBox>
        <BackButton onClick={goToHome}>Go to Home</BackButton>
      </BackButtonBox>
    </Container>
  );
};
