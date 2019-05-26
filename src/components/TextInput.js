import React from 'react';

import styled from '@emotion/styled';
import {css} from "emotion";

const InputWrapperStyled = styled('div')`
    width: 50%;
    margin: 32px auto 24px;
`;

const InputStyled = styled('input')`
    line-height: 40px;
    font-size: 20px;
    width: 100%;
    border: #c4c4c4 1px solid;
    border-radius: 6px;
    padding: 5px 9px;
    margin-bottom: 34px;
    outline: none;
    color: #2b2b2b;
    
    &:hover {
        border-color: #545454;
        transition: border-color 0.3s ease;
    }
    &:not(:hover) {
        border-color: #c4c4c4;
        transition: border-color 0.3s ease;
    }
    &:focus {
        border-color: darkgoldenrod;
    }
    &::placeholder {
        color: rgba(0,0,0,0.3);
    }
`;

const wrongClass = css`
    background: #ffd1bf;
`;

export const TextInput = (props) => {
    const inputExtraClass = props.wrongInput ? wrongClass : '';
    const handleChange = (event, originalText) => {
        const writtenCharacter = event.key;

        // Don't react to "Shift"-like inputs
        if (['Shift', 'Control', 'Meta', 'Alt', 'Backspace', 'Escape'].includes(writtenCharacter)) {
            event.preventDefault();
            return false;
        }

        const wrongInput = originalText.substring(props.caretPositionInOriginalText, props.caretPositionInOriginalText + 1) !== writtenCharacter;
        if (wrongInput) {
            event.preventDefault();
        }

        const writtenText = writtenCharacter === ' '
            ? ''
            : wrongInput ?
                event.target.value : event.target.value + writtenCharacter;

        props.onHandleTextChange({
            writtenText,
            wrongInput
        });
    };

    return (
        <InputWrapperStyled>
            {!props.showResults && <InputStyled
                placeholder="Type the text here..."
                className={inputExtraClass}
                onKeyDown={(e) => {
                    handleChange(e, props.originalText);
                }}
                onChange={() => {
                }}
                value={props.writtenText}
            />}
        </InputWrapperStyled>
    );
};