import React from 'react';
import styled from "@emotion/styled";

const WPMWrapperStyled = styled('div')`
    float: right;
    margin-top: 30px;
    font-weight: bold;
}
`;
export const WPMInfo = (props) => {
    const {typingAllowed, wpm} = props;
    return (
        <div>
            {typingAllowed && <WPMWrapperStyled>{wpm} wpm</WPMWrapperStyled>}
        </div>
    );
};