import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';

function IntakeCenter() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>Intake Center</h1>
                <p>Our intake center is located just outside the west entrance of The Woodlands at: </p>
                <p>29615 Highland Blvd</p>
                <p>Magnolia, TX  77354</p>
                <p>The center is open for animal intake:</p>
                <p>10:00 AM - 2:00 PM</p>
                <p>Every day except Sundays</p>
            </Box>
            <Box width={1 / 2}>
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['400px', '400px'],
                    }}
                    padding="20px"
                />
            </Box>
        </Flex>
    );
}

export default IntakeCenter;