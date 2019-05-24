import React from 'react';
import Input from '@material-ui/core/Input';
import styled from '@emotion/styled';

const InputWrapper = styled('div')`
    margin-top: 16px;
    width: 400px;
`;

export const TextInput = () => {
    return (
        <InputWrapper>
            <Input
                onChange={(e) => console.log('changed', e.target.value)}
                placeholder="Type the above text here when the race begins"
                label="Name"
                variant="outlined"
                fullWidth
            />
        </InputWrapper>
    );
};