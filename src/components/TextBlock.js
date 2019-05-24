import React, {useEffect} from 'react';

export const TextBlock = (props) => {
    useEffect(() => {
        props.onGetText();
    }, []);

    return (
        <div>
            <header>
                <h1>Typeracer</h1>
                <h3>
                    Check how fast you can type
                </h3>
            </header>
            <h4>Input this text</h4>
            {props.textToType}
        </div>
    );
};