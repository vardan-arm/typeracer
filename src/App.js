import React from 'react';
import styled from '@emotion/styled';
import {TextBlockContainer} from './components/TextBlock.container';
import {TextInputContainer} from "./components/TextInput.container";

const AppStyled = styled('div')`
    margin-left: 24px;
    margin-right: 24px;
    
    & * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const App = () => {
    return (
        <AppStyled>
            <header>
                <h1>Typeracer</h1>
                <h3>
                    Check how fast you can type
                </h3>
            </header>
            <h4>Input this text</h4>
            <TextBlockContainer/>
            <TextInputContainer/>
        </AppStyled>
    );
};

export default App;
