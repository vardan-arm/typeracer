import React from 'react';
import styled from "@emotion/styled";

const ResultsWrapperStyled = styled('div')`
    float: right;
    margin-top: 30px;
    font-weight: bold;
}
`;
export const Results = (props) => {
    return (
        <ResultsWrapperStyled>{props.wpm} wpm</ResultsWrapperStyled>
    );
};