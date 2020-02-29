
import React, { useState } from 'react';
import { Box, Image, Flex } from 'rebass';
import { Label, Input } from '@rebass/forms';

function EmailInput(props) {
    const [valid, setValid] = useState(false);

    return (
        <div>
            <Flex>
                <Box height="80px" width={1} padding="10px">
                    <Label>{props.label}</Label>
                    <Input
                        placeholder=''
                        onChange={() => {
                            console.log(event.target.value)
                            var inputText = event.target.value
                            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                            if (inputText.match(mailFormat)) {
                                setValid(true)
                            } else {
                                setValid(false)
                            }
                        }}
                    />
                </Box>
                <Box height="80px" width={1 / 5} padding="10px">
                    {valid ? <Image src={'../static/check1.png'}></Image> : <Image src={'../static/redex1.png'}></Image>}
                </Box>
            </Flex>
        </div>
    );
}

export default EmailInput;
