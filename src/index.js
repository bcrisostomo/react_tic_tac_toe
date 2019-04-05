import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game/index.js'
import styled from 'styled-components'
import Header from './Header/index.js'

export const Container = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vw;
    display: inline-block;
`

const App = () => {
    return (
        <Container>
            <Header title="Tic Tac Toe" message="Let's play!"/>
            <Game />
        </Container>
    );
}
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  