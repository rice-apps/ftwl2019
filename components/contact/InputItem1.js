
import React from 'react';
import { Box } from 'rebass';
import { Label, Input } from '@rebass/forms';

function InputItem1(props) {
    return (
        <div>
            <Box height="80px" width={1} padding="10px">
                <Label>{props.label}</Label>
                <Input
                    placeholder=''
                />
            </Box>
        </div>
    );
}

export default InputItem1;
