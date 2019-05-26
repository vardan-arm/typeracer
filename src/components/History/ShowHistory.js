import React from 'react';
import styled from "@emotion/styled";

const ShowHistoryLink = styled('a')`
    text-decoration: none;
    
    &:visited {
        color: #3f51b5;
    }
    &:hover {
        text-decoration: underline;
    }
    &:active {
        color: #3f51b5;
    }
`;

const IconStyled = styled('div')`
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>');
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 4px;
`;

const WrapperStyled = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ShowHistory = (props) => {
    const {historyItems, onGetHistoryItems} = props;
    const getHistoryItems = (e) => {
        e.preventDefault();

        onGetHistoryItems();
    };
    return (
        <div>
            {historyItems.length === 0 && (
                <WrapperStyled>
                    <IconStyled />
                    <ShowHistoryLink href="" onClick={(e) => getHistoryItems(e)}>Show History</ShowHistoryLink>
                </WrapperStyled>
            )}
        </div>
    );
};