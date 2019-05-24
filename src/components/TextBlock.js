import React, {useEffect} from 'react';

export const TextBlock = (props) => {
    useEffect(() => {
        props.onGetText();
    }, []);

    return (
        <div>
            {props.originalText}
        </div>
    );
};