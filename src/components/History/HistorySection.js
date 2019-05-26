import React, {useEffect} from 'react';
import styled from "@emotion/styled";
import {ShowHistoryContainer} from "./ShowHistory.container";
import {HistoryItemsWrapperContainer} from "./HistoryItemsWrapper.container";

const HistoryItemsWrapperStyled = styled('div')`
    width: 60%;
    margin: 32px auto;
`;

export const HistorySection = (props) => {
    const { onGetHistoryItemsFromLocalStorage } = props;
    useEffect(() => {
        onGetHistoryItemsFromLocalStorage();
    }, [onGetHistoryItemsFromLocalStorage]);

    return (
        <div>
            {props.showHistoryItemsSection && (
                <HistoryItemsWrapperStyled>
                    <ShowHistoryContainer />
                    <HistoryItemsWrapperContainer />
                </HistoryItemsWrapperStyled>
            )}
        </div>
    );
};