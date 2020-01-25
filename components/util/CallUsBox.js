import React from 'react';
import { Box, Flex} from 'rebass';
import ColoredCard from './ColoredCard.js'

function CallUsBox() {
    return (
        <div>
            <Flex justifyContent="center">
                <Box>
                    <ColoredCard 
                    
                    cardwidth="320px"
                    cardheight="170px"
                    line1text="CALL US" 
                    line2text="281-259-0039" 
                    cardcolor="#EE9C3B" 
                    letterspacing="7px"
                    lettersize="20px">

                    </ColoredCard>
                </Box>
            </Flex>
        </div>
    )
}

export default CallUsBox;