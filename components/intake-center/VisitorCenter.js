import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import ColoredCard from "../util/ColoredCard.js";

function VisitorCenter() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>Visitor's Center</h1>
                <p>29816 Dobbin Huffsmith Road</p>
                <p>Magnolia, 77354</p>
                <p>Our visitor’s center is open:</p>
                <p>10:00 AM - 2:00 PM</p>
                <p>Second Saturday of every month</p>
                <p>Come meet some of our wildlife animal ambassadors (owls, opossum, or hawk), enjoy some hands-on learning about animals, view of wildlife diorama, make a craft, and have some wild fun!  $5 per person, children 3 and under free.  All funds raised go to support the mission of Friends of Texas Wildlife and the animals we assist. </p>
                <div className='cards'>
                        <ColoredCard cardwidth="400px" cardcolor="orange" line1text="CALL US" line2text="281-259-0039"></ColoredCard>
                        <br></br>
                        <br></br>
                        <ColoredCard cardwidth="400px" cardcolor="orange" line1text="EMAIL US" line2text="ftwl.education@gmail.com"></ColoredCard>
                </div>
            </Box>
        </Flex>
    );
}

export default VisitorCenter;