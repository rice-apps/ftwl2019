import Title from '../util/Title.js';
import SubText from '../subtext/subtext.js';
import ColoredCard from '../util/ColoredCard.js';
import {Flex, Box, Button} from 'rebass';


function VolunteerHome() {
  return (
    <div>
      <Title title="Volunteer" />
      <SubText text="Friends of Texas Wildlife has no paid staff and relies totally on caring volunteers to help fulfill its mission. Our volunteers fall under two categories:" />
      <Flex>
          <Box width={1/9}></Box>
          <Box width={3/9}><ColoredCard line1text="REHABILITATORS" cardcolor="orange"/></Box>
          <Box width={1/9}></Box>
          <Box width={3/9}><ColoredCard line1text="ADMINISTRATORS" cardcolor="orange"/></Box>
          <Box width={1/9}></Box>
      </Flex>
      <div className="button">
          <Button variant='outline' color='green'>Click here to volunteer!</Button>
      </div>
    </div>
  );
}

export default VolunteerHome;
