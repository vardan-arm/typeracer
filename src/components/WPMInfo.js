import React from 'react';
import styled from "@emotion/styled";

const WPMWrapperStyled = styled('div')`
    float: right;
    margin-top: 30px;
    font-weight: bold;
}
`;
export const WPMInfo = (props) => {
    const {showResults, wpm} = props;
    return (
        <div>
            {!showResults && <WPMWrapperStyled>{wpm} wpm</WPMWrapperStyled>}
        </div>
    );
};