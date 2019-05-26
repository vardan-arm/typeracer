import React from 'react';
import styled from "@emotion/styled";

const ResultsStyled = styled('div')`
    min-height: 80px;
    padding-bottom: 30px;
`;

const DetailsSectionStyled = styled('div')`
    margin-left: 370px;
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
    const {showResults, wpm, completionPercent} = props;

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
                            <ResultHeader>Time:</ResultHeader>
                            <ResultDetails>duration (comes from store)</ResultDetails>
                        </DetailsSectionItemStyled>
                    </DetailsSectionStyled>
                </ResultsStyled>)}
        </div>
    );
};