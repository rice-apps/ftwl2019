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
                <Box><Image src={'../static/ftwl-clock.png'} sx={{size: '9%'}} padding="8px"/>
                {intakeinfo.intakecenter.time}
                </Box>
                <Box><Image src={'../static/ftwl-calendar.png'} sx={{size: '10%'}} padding="8px"/>
                {intakeinfo.intakecenter.daysopen}
                </Box>

                {intakeinfo.intakecenter.text.map(
                    p => {
                        return(
                            <p>{p}</p>
                        )
                    }
                )}
            </Box>

            <Box width={1 / 2}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.83513662931!2d-95.62853668498155!3d30.184703081831525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86472f22438e292f%3A0x9a5f2ec476b85532!2s29615%20Highland%20Blvd%2C%20Magnolia%2C%20TX%2077354!5e0!3m2!1sen!2sus!4v1587336470164!5m2!1sen!2sus" width="400" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </Box>
        </Flex>
    );
}

export default IntakeCenter;