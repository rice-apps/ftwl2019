import React from 'react';
import { Box } from 'rebass';
import { Label, Textarea } from '@rebass/forms';

function InputItem2(props) {
    return (
        <div>
            <Box height="80px" width={1} padding="10px 10px 240px 10px">
                <Label>{props.label}</Label>
                <Textarea
                    height={props.height}
                />
            </Box>
        </div>
    );
}

export default InputItem2;