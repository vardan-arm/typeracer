import React from 'react';
import styled from '@emotion/styled';
import {TextBlockContainer} from './components/TextBlock.container';
import {TextInput} from "./components/TextInput";

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
            <TextBlockContainer/>
            <TextInput/>
        </AppStyled>
    );
};

export default App;
