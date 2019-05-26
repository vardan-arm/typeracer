import React from 'react';
import { BootstrapButton } from './BoostrapButton';
import styled from "@emotion/styled";

const TryAgainWrapperStyled = styled('div')`
    text-align: center;
    margin-bottom: 24px;
`;

export const TryAgain = props => {
    const { showResults, typingAllowed, onSetTryAgain } = props;
    return (
        <div>
            {showResults && !typingAllowed && (
                <TryAgainWrapperStyled>
                    <BootstrapButton variant="contained" color="primary" onClick={() => onSetTryAgain()}>
                        Let's Try Again
                    </BootstrapButton>
                </TryAgainWrapperStyled>
            )}
        </div>
    );
};