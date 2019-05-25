import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

const CountDownStyled = styled('div')`
    float: right;
    margin-top: -40px;
    font-weight: bold;
`;

export const CountDown = (props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // TODO: `duration` will come from store, update this later
        let timer = props.duration;
        const intervalId = setInterval(() => {
            const seconds = parseInt(timer % 60, 10);
            setMinutes(parseInt(timer / 60));
            setSeconds(seconds < 10 ? `0${seconds}` : seconds);

            if (--timer < 0) {
                clearInterval(intervalId);
            }

            // Calculate WPM every 3 seconds
            if (timer % 3 === 0) {
                props.onCalculateWPM(props.duration - timer);
            }
        }, 1000);

        // Cleanup the effect
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <CountDownStyled>
            {minutes}:{seconds}
        </CountDownStyled>
    );
};