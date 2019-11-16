import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { prependOnceListener } from 'cluster';

function PageStructure(props) {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                {props.leftcontent}
            </Box>
            <Box width={1 / 2}>
                {props.rightcontent}
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default PageStructure;