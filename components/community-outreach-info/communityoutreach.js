import Title from '../util/Title.js'
import Animal from '../found-animal-single/Animal.js'
import Community from '../community-outreach-info/community.json'
import CallUsBox from '../util/CallUsBox'
import { Flex, Box, Button } from 'rebass';


function CommunityOutreach() {
    return (
        <div>
            <Title title="Education and Community Outreach"></Title>
            <Flex>
                <Box width={1 / 4}></Box>
                <Box width={1 / 2}>
                    <Animal animal={Community} />
                </Box>
                <Box width={1 / 4}></Box>
            </Flex>
            {/* <Flex>
                <Box width={1 / 4}></Box>
                <Box width={1 / 2}>
                    <CallUsBox></CallUsBox>
                </Box>
                <Box width={1 / 4}></Box>
            </Flex>
            <Flex>
                <p> </p>
            </Flex> */}

        </div>
    );
}

export default CommunityOutreach;