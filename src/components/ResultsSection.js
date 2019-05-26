import React from 'react';
import styled from "@emotion/styled";

const ResultsStyled = styled('div')`
    padding-bottom: 30px;
`;

const DetailsSectionStyled = styled('div')`
    width: 40%;
    margin: 0 auto;
`;

const DetailsSectionItemStyled = styled('div')`
    height: 25px;
`;

const ResultHeader = styled('div')`
    width: 50px;
    display: inline-block;
`;
const ResultDetails = styled('span')`
    margin-left: 90px;
    font-weight: bold;
`;
export const ResultsSection = props => {
    const {
        showResults,
        wpm,
        completionPercent,
        duration
    } = props;

    return (
        <div>
            {showResults && (
                <ResultsStyled>
                    <DetailsSectionStyled>
                        <DetailsSectionItemStyled>
                            <ResultHeader>Speed:</ResultHeader>
                            <ResultDetails>{wpm} wpm</ResultDetails>
                        </DetailsSectionItemStyled>
                        <DetailsSectionItemStyled>
                            <ResultHeader>Completed:</ResultHeader>
                            <ResultDetails>{completionPercent}%</ResultDetails>
                        </DetailsSectionItemStyled>
                        <DetailsSectionItemStyled>
                            <ResultHeader>Duration:</ResultHeader>
                            <ResultDetails>{duration} seconds</ResultDetails>
                        </DetailsSectionItemStyled>
                    </DetailsSectionStyled>
                </ResultsStyled>)}
        </div>
    );
};