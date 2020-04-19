import Title from '../util/Title.js';
import SubText from '../subtext/subtext.js';
import ColoredCard from '../util/ColoredCard.js';
import { Flex, Box, Button, Image, Link } from 'rebass';
import Collapsible from 'react-collapsible';


function VolunteerHome() {
  console.log("testing");
  return (
    <div>
      <Title title="Volunteer" />
      <SubText text="Friends of Texas Wildlife has no paid staff and relies totally on caring volunteers to help fulfill its mission. Our volunteers fall under two categories:" />
      <Flex>
        <Box width={1 / 9}></Box>
        <Box width={3 / 9}>
          <Collapsible trigger={<ColoredCard cardcolor="#EE9C3B" letter1size="32px" letterspacing1="1px" line1text="BECOME" letter2size="32px" letterspacing2="1px" line2text="A REHABILITATOR" />}>
            <ColoredCard
              cardcolor="#EE9C3B"
              cardheight="300px"
              letterlistsize="15px"
              linelist={["Individuals interested in becoming rehabilitators must:", "", "1. Become a member of Friends of Texas Wildlife", "2. Participate in ongoing education efforts", "", "Each prospective rehab volunteer will be ", "partnered with a trained permitted rehabilitator."]} />
          </Collapsible>
        </Box>
        <Box width={1 / 9}></Box>
        <Box width={3 / 9}>
          <Collapsible trigger={<ColoredCard cardcolor="#EE9C3B" letter1size="32px" letterspacing1="1px" line1text="BECOME" letter2size="32px" letterspacing2="1px" line2text="AN ADMINISTRATOR" />}>
            <ColoredCard
              cardcolor="#EE9C3B"
              letterlistsize="15px"
              cardheight="300px"
              linelist={["Administrative volunteers are needed in areas such as:", "1. Animal intake at our center", "2. Fundraising", "3. Marketing and Public Relations", "4. Community Outreach", "5. Education", "...and more!"]} />
          </Collapsible>
        </Box>
        <Box width={1 / 9}></Box>
      </Flex>

      <div className="button">
        <Button variant='outline' color='green'><Link href='http://crm.ftwl.org/civicrm/profile/create?gid=10&reset=1'>Click here to volunteer!</Link></Button>
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
