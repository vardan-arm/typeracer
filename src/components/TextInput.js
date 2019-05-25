import React from 'react';
import TextField from '@material-ui/core/TextField';

import styled from '@emotion/styled';
import {css} from "emotion";

const InputWrapper = styled('div')`
    margin-top: 16px;
    width: 400px;
`;

const wrongClass = css`
    border-color: red;
    color: red;
    background: #ffd1bf;
`;

export const TextInput = (props) => {
    const inputExtraClass = props.wrongInput ? wrongClass : '';
console.log({inputExtraClass});
    const handleChange = (event, originalText) => {
        const writtenCharacter = event.key;

        // Don't react to "Shift"-like inputs
        if (['Shift', 'Control', 'Meta', 'Alt'].includes(writtenCharacter)) {
            event.preventDefault();
            return false;
        }

        const wrongInput = originalText.substring(props.caretPositionInOriginalText, props.caretPositionInOriginalText + 1) !== writtenCharacter;
        if (wrongInput) {
            event.preventDefault();
        }

        props.onHandleTextChange({
            wrongInput
        });
    };

    return (
        <InputWrapper>
            <TextField
                className={inputExtraClass}
                // borderColor="text.primary"
                fullWidth
                autoFocus
                placeholder="Type the above text here when the race begins"
                label="Your text"
                variant="outlined"
                onKeyDown={(e) => {
                    handleChange(e, props.originalText);
                }}
            />
        </InputWrapper>
    );
};