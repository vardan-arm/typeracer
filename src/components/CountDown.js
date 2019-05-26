import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

const CountDownStyled = styled('div')`
    float: right;
    margin-top: -40px;
    font-weight: bold;
`;

export const CountDown = (props) => {
    const [countDownStarted, setCountDownStarted] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const {
        duration,
        onHandleTimeIsUp,
        onCalculateWPM
    } = props;

    useEffect(() => {
        // TODO: `duration` will come from store, update this later
        let timer = duration;

        const intervalId = setInterval(() => {
            const seconds = parseInt(timer % 60, 10);
            setMinutes(parseInt(timer / 60));
            setSeconds(seconds < 10 ? `0${seconds}` : seconds);
            setCountDownStarted(true);

            if (--timer < 0) {
                clearInterval(intervalId);
                onHandleTimeIsUp();
            }

            // Calculate WPM every 3 seconds
            if (timer % 3 === 0) {
                onCalculateWPM(duration - timer);
            }
        }, 1000);

        // Cleanup the hook
        return () => {
            clearInterval(intervalId);
        }
    }, [duration, onHandleTimeIsUp, onCalculateWPM]);

    return (
        <div>
            {
                countDownStarted && (
                    <CountDownStyled>
                        {minutes}:{seconds}
                    </CountDownStyled>
                )
            }
        </div>

    );
};