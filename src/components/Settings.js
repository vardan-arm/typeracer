import React, {useState} from 'react';
import {StartButtonContainer} from "./StartButton.container";
import TextField from "@material-ui/core/TextField";
import styled from "@emotion/styled";

const SettingsStyled = styled('div')`
    text-align: center;
    margin-top: 24px;
`;

export const Settings = props => {
    const [duration, setDuration] = useState(props.duration);

    const validateInput = (inputValue) => {
        const validatedValue = inputValue > 0 && inputValue <= 600 ? inputValue : props.duration;
        setDuration(validatedValue);
    };

    return (
        <div>
            {!props.typingAllowed && (
                <SettingsStyled>
                    <TextField
                        id="outlined-number"
                        label="Duration (sec)"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        onBlur={e => validateInput(e.target.value)}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <StartButtonContainer />
                </SettingsStyled>
            )}
        </div>
    )
};