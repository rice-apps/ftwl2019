import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import ColoredCard from "../util/ColoredCard.js";
import intakeinfo from './intakecenter.json';
import CallUsBox from '../util/CallUsBox.js';
import EmailUsBox from '../util/EmailUsBox.js';

function VisitorCenter() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>{intakeinfo.visitorcenter.title}</h1>
                {intakeinfo.visitorcenter.address.map(
                    k => {
                        return (
                            <p><i>{k}</i></p>
                        )
                    }
                )}
                <p>Our visitor’s center is open:</p>
                <p><Image src={'../static/ftwlclock.png'} sx={{ width: ['50px', '50px'], }} padding="10px" />{intakeinfo.visitorcenter.time}</p>
                <p><Image src={'../static/ftwlcalendar.png'} sx={{ width: ['50px', '50px'], }} padding="10px" />{intakeinfo.visitorcenter.daysopen}</p>
                {intakeinfo.visitorcenter.text}
                <br></br>
                <br></br>


                <div className='cards'>
                    <CallUsBox></CallUsBox>
                    <br></br>
                    <br></br>
                    <EmailUsBox></EmailUsBox>
                </div>
            </Box>

            <Box width={1 / 2}>
                {intakeinfo.visitorcenter.images.map(
                    i => {
                        return (
                            <Image src={i} sx={{ width: ['300px', '300px'], }} padding="20px" />
                        )
                    }
                )}
            </Box>

        </Flex>
    );
}

export default VisitorCenter;