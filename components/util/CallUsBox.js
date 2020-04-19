import React from 'react';
import { Box, Flex } from 'rebass';
import ColoredCard from './ColoredCard.js'

function CallUsBox() {
    return (
        <div>
            <Flex justifyContent="center">
                <Box>
                    <ColoredCard

                        cardwidth="320px"
                        cardheight="140px"

                        line1text="CALL US"
                        letterspacing1="4px"
                        lettersize1="14px"

                        line2text="281-259-0039"
                        letterspacing2="4px"
                        lettersize2="30px"

                        cardcolor="#EE9C3B"
                    >

                    </ColoredCard>
                </Box>
            </Flex>
        </div>
    )
}

export default CallUsBox;