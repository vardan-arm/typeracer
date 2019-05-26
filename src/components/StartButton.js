import React from 'react';
import styled from "@emotion/styled";
import {BootstrapButton} from "./BoostrapButton";

const ButtonWrapperStyled = styled('div')`
    margin-top: 16px;
    text-align: center;
`;

export const StartButton = (props) => {
    const { requestInProgress, onSetStartTyping } = props;
    return (
                <ButtonWrapperStyled>
                    <BootstrapButton
                        variant="contained"
                        color="secondary"
                        disabled={requestInProgress}
                        onClick={() => {
                            onSetStartTyping(true);
                        }}
                    >
                        Start
                    </BootstrapButton>
                </ButtonWrapperStyled>
    );
};