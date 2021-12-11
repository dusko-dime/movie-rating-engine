import React from 'react';
import { Container, TitleWord } from './style';

export const Header = () => {
    return (
        <Container>
            <TitleWord>Movie</TitleWord>
            <TitleWord>Rating</TitleWord>
            <TitleWord>Engine</TitleWord>
        </Container>
    )
}