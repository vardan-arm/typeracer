import React, {useState} from 'react';
import {StartButtonContainer} from "./StartButton.container";
import TextField from "@material-ui/core/TextField";
import styled from "@emotion/styled";
import {maxDuration, minDuration} from "./constants";

const SettingsStyled = styled('div')`
    text-align: center;
    margin-top: 24px;
`;

export const Settings = props => {
    const { duration, onSetDuration, showSettingsSection } = props;
    const [writingDuration, setWritingDuration] = useState(duration);

    const validateInput = (inputValue) => {
        const validatedValue = inputValue > minDuration && inputValue <= maxDuration ? inputValue : duration;
        setWritingDuration(validatedValue);

        // Save in store
        onSetDuration(validatedValue);
    };

    return (
        <div>
            {showSettingsSection && (
                <SettingsStyled>
                    <TextField
                        id="outlined-number"
                        label="Duration (sec)"
                        value={writingDuration}
                        onChange={e => setWritingDuration(+e.target.value)}
                        onBlur={e => validateInput(+e.target.value)}
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