import Title from '../util/Title.js'
import Animal from '../found-animal-single/Animal.js'
import Community from '../community-outreach-info/community.json'
import ColoredCard from '../util/ColoredCard.js'
import {Flex, Box, Button} from 'rebass';


function CommunityOutreach() {
    return (
        <div>
            <Title title="Education and Community Outreach"></Title>
            <Flex>
                <Box width={1/4}></Box>
                <Box width={1/2}>
                    <Animal animal={Community}/>
                </Box>
                <Box width={1/4}></Box>
            </Flex>
            <Flex>
                <Box width={1/4}></Box>
                <Box width={1/2}>
                    <ColoredCard cardcolor="orange" cardwidth="400px" line1text="CALL US" line2text="281-259-0039" />
                </Box>
                <Box width={1/4}></Box>
            </Flex>
            <Flex>
                <p> </p>
            </Flex>
            
        </div>
    );
}

export default CommunityOutreach;