import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "@emotion/styled";

const ButtonWrapperStyled = styled('div')`
    margin-top: 16px;
    text-align: center;
`;

export const StartButton = (props) => {
    return (
                <ButtonWrapperStyled>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            props.onSetStartTyping(true);
                        }}
                    >
                        Let's Start
                    </Button>
                </ButtonWrapperStyled>
    );
};