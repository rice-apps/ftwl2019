
import React, { useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import { Label, Input } from '@rebass/forms';

function NameInput(props) {
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
                            if (inputText != '') {
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

export default NameInput;