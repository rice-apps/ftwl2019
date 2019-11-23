import InputItem1 from './InputItem1.js'
import InputItem2 from './InputItem2.js'
import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';

function ContactContent() {
    return (
        <Flex>
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <InputItem1 label="FIRST NAME"></InputItem1>
                <InputItem1 label="LAST NAME"></InputItem1>
                <InputItem1 label="EMAIL"></InputItem1>
                <InputItem2 label="YOUR MESSAGE" height="200px"></InputItem2>
                <Button variant='outline' color='green'>SUBMIT</Button>
            </Box>

            <Box width={1 / 2} >
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['350px', '350px'],
                    }}
                    padding="30px"
                />
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default ContactContent;