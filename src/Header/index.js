import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
    color: red;
    font-family: Sans-serif;
    display: inline-block;
`

export const Subtitle = styled.h4`
    color: black;
    font-family: Sans-serif;
    display: inline-block;
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Title>{props.title}</Title>
            <Subtitle>{props.message}</Subtitle>
        </HeaderContainer>
    );
}

export default Header;