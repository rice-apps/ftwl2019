import ContactImages from '../contact/ContactImages.js';
import React from 'react';
import { Box, Flex, Button } from 'rebass';

function DonateContent() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>Every dollar helps us save animals.</h1>
                <p>
                    We depend entirely on donations to provide for the <br></br>
                    veterinary care that saves the lives of the <br></br>
                    malnourished, seriously ingured, and sick wildlife.
                </p>
                <Button variant='outline' color='green'>DONATE</Button>
                <h2>Do you know how much it costs to <br></br>
                    rehabilitate an animal?</h2>
                <Flex>
                    <Box>
                        <ul>
                            <li>$25</li>
                            <li>$50</li>
                            <li>$100</li>
                            <li>$500</li>
                        </ul>
                    </Box>
                    <Box>
                        <ul>
                            <li>Provides one month care for song birds</li>
                            <li>Takes care of a rabbit through release</li>
                            <li>Takes care of a squirrel through release</li>
                            <li>Takes care of a raptor through release</li>
                        </ul>
                    </Box>
                </Flex>
            </Box>
            <Box width={1 / 2}>
                <ContactImages></ContactImages>
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default DonateContent;