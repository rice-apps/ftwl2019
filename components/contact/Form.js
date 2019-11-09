import InputItem1 from './InputItem1.js'
import InputItem2 from './InputItem2.js'
import ContactImages from './ContactImages.js'
import React from 'react';
import { Box, Flex, Button } from 'rebass';

function Form() {
    return (
        <Flex>
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <InputItem1 label="First Name"></InputItem1>
                <InputItem1 label="Last Name"></InputItem1>
                <InputItem1 label="Email"></InputItem1>
                <InputItem2 label="Your Message" height="200px"></InputItem2>
                <Button variant='outline' color='green'>Submit</Button>
            </Box>
            <Box width={1 / 2}>
                <ContactImages></ContactImages>
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default Form;