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

                    line1text="EMAIL US" 
                    letterspacing1="4px"
                    lettersize1="14px"
                    
                    line2text="ftwl.education@gmail.com" 
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