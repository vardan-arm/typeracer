import React, {useEffect} from 'react';
import styled from "@emotion/styled";

const TextBlockStyled = styled('div')`
    border: 2px solid darkgreen;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 22px;
    background-color: azure;
`;

const PassedTextStyled = styled('span')`
    color: green;
`;

const RemainingTextStyled = styled('span')`
    border-left: green 1px solid;
`;

export const TextBlock = (props) => {
    const { onGetText } = props;
    useEffect(() => {
        onGetText();
    }, [onGetText]);

    const { originalText, caretPositionInOriginalText } = props;
    const correctTextPortion = originalText.substring(0, caretPositionInOriginalText);
    const remainingText = originalText.substring(caretPositionInOriginalText);

    return (
        <TextBlockStyled>
            <PassedTextStyled>
                {correctTextPortion}
            </PassedTextStyled>
            <RemainingTextStyled>
                {remainingText}
            </RemainingTextStyled>
        </TextBlockStyled>
    );
};