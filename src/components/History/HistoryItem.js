import React from 'react';
import {ResultsSection} from "../ResultsSection";
import styled from "@emotion/styled";

const HistoryItemStyled = styled('div')`
    border: 1px solid gray;
    border-radius: 5px;
    background-color: beige;
    margin: 16px auto;

    & [data-name="display-section"] {
        margin-left: 24px;
    }
`;

const DateStyled = styled('div')`
    font-weight: bold;
    font-style: italic;
    padding: 24px 8px 24px 0;
    margin-left: 24px;
    width: fit-content;
    border-radius: 7px;
}
`;

export const HistoryItem = ({data}) => {
    return (
        <HistoryItemStyled>
            <DateStyled>
                {data.date}
            </DateStyled>
            <ResultsSection
                showResults={true}
                {...data}
            />
        </HistoryItemStyled>
    );
};