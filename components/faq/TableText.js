import React, { useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import './TableText.css';

function TableText() {
    return (
        <div className="TableText">
            <Flex>
                <Box width={1/5}></Box>
                <Box width={3/20}>
                    <p><b>NOISES IN YOUR ATTIC</b></p>
                </Box>
                <Box width={1/20}></Box>
                <Box width={2/5}>
                    <p><b>I think there are animals in my attic. What do I do?</b></p>
                    <p>Nuisance wildlife in your attic? Here are a few methods to get rid of the intruders:</p>
                    <p>CREATE A PREDATOR SMELL.</p>
                    <p>Place a stinky dog blanket (the smellier the better) near or as close to the area of animal activity in your attic. Purchase fox urine at sporting goods stores, saturate some tennis balls with it and toss in the attic.</p>
                    <p>MAKE A LOT OF NOISE.</p>
                    <p>Periodically, over a 3 day period, go into the attic and make a lot of noise. Blow whistles, honk air horns, and clang pots and pans. You can also attach a box or cans to a cord, toss it into the attic, and drag it across the rafters. Make the noise during the sleep period of the animal (raccoons sleep during the day; squirrels at night).</p>
                    <p>LIGHTS.</p>
                    <p>Keep bright lights on in the attic or run trouble-lights 24 hours a day for the 3-day period.</p>
                    <p>LIMIT ACCESS.</p>
                    <p>You must now repair the animal’s access to the attic. Block entryways with thick boards or wire and trim back tree branches. Other squirrels and raccoons are waiting to take up residence in your attic, so act quickly.</p>
                    <p>If you have tried all of the above, or if you have a situation you feel you cannot deal with on your own, please call 911 Wildlife at 713-287-1911, or see 911wildlife.com for more information.</p>
                </Box>
                <Box width = {1/5}></Box>
            </Flex>
            <Flex>
                <Box width={1/5}></Box>
                <Box width={3/20}>
                    <p><b>BRINGING ANIMALS TO THE INTAKE CENTER</b></p>
                </Box>
                <Box width={1/20}></Box>
                <Box width={2/5}>
                    <p><b>Can I bring an animal to the intake center?</b></p>
                    <p>Please first call 281-259-0039, or for injured deer, call Game Warden Dispatch at 512-389-4848.</p>
                    <p>Please do not bring animals to our intake center unless you have spoken with our intake center first to be sure we are open and ready to receive the animal. We are not open 24 hours, so we may sometimes refer you directly to a rehabilitator in your area.</p>
                </Box>
                <Box width = {1/5}></Box>
            </Flex>
        </div>
    );
}

export default TableText;