import React from 'react';
import {HistoryItem} from "./HistoryItem";

export const HistoryItemsWrapper = (props) => {
    return (
        <div>
            {
                props.historyItems.length > 0 && (
                    <div>
                        <h3>Typing History</h3>
                        {props.historyItems.map((historyItem, index) =>
                            <HistoryItem key={index} data={historyItem}/>
                        )}
                    </div>
                )
            }
        </div>
    )
};