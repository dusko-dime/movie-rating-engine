import React from 'react';
import {Props} from './EmptyMessage.interface';
import {Container, TitleBox, IconBox} from './style';

export const EmptyMessage: React.FC<Props> = ({title, icon}) => {
    return (
        <Container>
            <TitleBox>
                {title}
            </TitleBox>
            <IconBox>
                {icon}
            </IconBox>
        </Container>
    )
}