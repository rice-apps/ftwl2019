import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import intakeinfo from './intakecenter.json';

function IntakeCenter() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>{intakeinfo.intakecenter.title}</h1>
                <p>Our intake center is located just outside the west entrance of The Woodlands at: </p>
                {intakeinfo.intakecenter.address.map(
                    k => {
                        return(
                            <p><i>{k}</i></p>
                        )
                    }
                )}
                <p>The center is open for animal intake:</p>
                <p><Image src={'../static/ftwlclock.png'} sx={{width: ['50px', '50px'],}} padding="10px"/>{intakeinfo.intakecenter.time}</p>
                <p><Image src={'../static/ftwlcalendar.png'} sx={{width: ['50px', '50px'],}} padding="10px"/>{intakeinfo.intakecenter.daysopen}</p>
                {intakeinfo.intakecenter.text.map(
                    p => {
                        return(
                            <p>{p}</p>
                        )
                    }
                )}
            </Box>

            <Box width={1 / 2}>
                <Image src={intakeinfo.intakecenter.image} sx={{width: ['300px', '300px'],}} padding="20px"/>
            </Box>
        </Flex>
    );
}

export default IntakeCenter;