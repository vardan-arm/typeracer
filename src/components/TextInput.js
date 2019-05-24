import React from 'react';
import Input from '@material-ui/core/Input';
import styled from '@emotion/styled';

const InputWrapper = styled('div')`
    margin-top: 16px;
    width: 400px;
`;

export const TextInput = (props) => {
    return (
        <InputWrapper>
            <Input
                fullWidth
                autoFocus
                placeholder="Type the above text here when the race begins"
                label="Name"
                variant="outlined"
                onChange={(e) => props.onHandleTextChange(e.target.value)}
            />
        </InputWrapper>
    );
};