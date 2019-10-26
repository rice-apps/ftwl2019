import InputItem1 from './InputItem1.js'
import InputItem2 from './InputItem2.js'
import ContactImages from './ContactImages.js'
import './Form.css'
import React from 'react';
import { Box, Flex, Image } from 'rebass';

function Form(props) {
    return (
        <Flex>
            <Box width={1 / 2}>
                <div className="form">
                    <InputItem1 label="First Name"></InputItem1>
                    <InputItem1 label="Last Name"></InputItem1>
                    <InputItem1 label="Email"></InputItem1>
                    <InputItem2 label="Your Message" height="200px"></InputItem2>
                </div>
            </Box>
            <Box width={1 / 2}>
                <ContactImages></ContactImages>
            </Box>
        </Flex>
    );
}

export default Form;