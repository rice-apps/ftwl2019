import Title from '../util/Title.js';
import SubText from '../subtext/subtext.js';
import ColoredCard from '../util/ColoredCard.js';
import {Flex, Box, Button, Image} from 'rebass';
import Collapsible from 'react-collapsible';


function VolunteerHome() {
  return (
    <div>
      <Title title="Volunteer" />
      <SubText text="Friends of Texas Wildlife has no paid staff and relies totally on caring volunteers to help fulfill its mission. Our volunteers fall under two categories:" />
      <Flex>
          <Box width={1/9}></Box>
          <Box width={3/9}>
            <Collapsible trigger="Rehabilitator">
              <p>Rehabilitator</p>
              {/* <ColoredCard line1text="REHABILITATORS" cardcolor="orange"/> */}
            </Collapsible>
          </Box>
          <Box width={1/9}></Box>
          <Box width={3/9}><ColoredCard line1text="ADMINISTRATORS" cardcolor="orange"/></Box>
          <Box width={1/9}></Box>
      </Flex>
      <div className="button">
          <Button variant='outline' color='green'>Click here to volunteer!</Button>
      </div>
      <Flex>
        <Box>
          <Image src="../../static/volunteerimage1.png" />
        </Box>
        <Box>
          <Image src="../../static/volunteerimage2.png" />
        </Box>
        <Box>
          <Image src="../../static/volunteerimage3.png" />
        </Box>
        <Box>
          <Image src="../../static/volunteerimage4.png" />
        </Box>
      </Flex>
    </div>
  );
}

export default VolunteerHome;
