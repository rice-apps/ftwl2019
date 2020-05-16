import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import ColoredCard from "../util/ColoredCard.js";
import intakeinfo from './intakecenter.json';

function VisitorCenter() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>{intakeinfo.visitorcenter.title}</h1>
                {intakeinfo.visitorcenter.address.map(
                    k => {
                        return(
                            <p><i>{k}</i></p>
                        )
                    }
                )}
                <p>Our visitor’s center is open:</p>
                <Box><Image src={'../static/ftwl-clock.png'} sx={{size: '9%'}} padding="8px"/>
                {intakeinfo.visitorcenter.time}
                </Box>

                <Box><Image src={'../static/ftwl-calendar.png'} sx={{size: '10%'}} padding="8px"/>
                {intakeinfo.visitorcenter.daysopen}
                </Box>
                <br></br>
                {intakeinfo.visitorcenter.text}                
                <br></br>
                <br></br>
                <br></br>
                
                <div className='cards'>
                    <ColoredCard cardwidth="400px" cardcolor="orange" line1text="CALL US" line2text="281-259-0039"></ColoredCard>
                    <br></br>
                    <br></br>
                    <ColoredCard cardwidth="400px" cardcolor="orange" line1text="EMAIL US" line2text="ftwl.education@gmail.com"></ColoredCard>
                </div>
            </Box>
         
            <Box width={1 / 2}>
            {intakeinfo.visitorcenter.images.map(
                i => {
                    return(
                        <Image src={i} sx={{width: ['300px', '300px'],}} padding="20px"/>
                    )
                }
            )}
            </Box>

        </Flex>
    );
}

export default VisitorCenter;