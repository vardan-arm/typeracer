import React from 'react';
import styled from '@emotion/styled';
import {TextBlockContainer} from './components/TextBlock.container';
import {TextInputContainer} from "./components/TextInput.container";
import {CountDownContainer} from "./components/CountDown.container";
import {WPMInfoContainer} from "./components/WPMInfo.container";
import { ResultsSectionContainer } from './components/ResultsSection.container';

const AppWrapperStyled = styled('div')`
    margin-left: 24px;
    margin-right: 24px;
    
    border: 1px solid gray;
    padding: 0px 16px;
    border-radius: 12px;
    background-color: lightcyan;
    
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
        <AppWrapperStyled>
            <header>
                <h1>Typeracer</h1>
                <h3>
                    Check your typing skills
                </h3>
            </header>
            <h4>Type the text below:</h4>
            <CountDownContainer duration={20} />
            <TextBlockContainer/>
            <WPMInfoContainer />
            <TextInputContainer/>
            <ResultsSectionContainer />
        </AppWrapperStyled>
    );
};

export default App;
