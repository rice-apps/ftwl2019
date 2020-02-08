import Title from '../util/Title.js';
import SubText from '../subtext/subtext.js';
import ColoredCard from '../util/ColoredCard.js';
import {Flex, Box, Button, Image, Link} from 'rebass';
import Collapsible from 'react-collapsible';


function VolunteerHome() {
  return (
    <div>
      <Title title="Volunteer" />
      <SubText text="Friends of Texas Wildlife has no paid staff and relies totally on caring volunteers to help fulfill its mission. Our volunteers fall under two categories:" />
      <Flex>
          <Box width={1/9}></Box>
          <Box width={3/9}>
            <Collapsible trigger={<ColoredCard cardcolor="orange" line1text="BECOME A REHABILITATOR" />}>
              <ColoredCard 
                cardcolor="orange" 
                line1text="Individuals interested in becoming rehabilitators must:"
                lettersize1="15px"
                cardheight="300px" />
                <h1>BECOME A REHABILITATOR</h1>
                <p>Individuals interested in becoming rehabilitators must:</p>
                  <ol>
                    <li>Become a member of Friends of Texas Wildlife</li>
                    <li>Participate in ongoing education efforts</li>
                  </ol> 
                  <p>Each prospective rehab volunteer will be partnered with a trained permitted rehabilitator.</p>
              
              
            </Collapsible>
          </Box> 
          <Box width={1/9}></Box>
          <Box width={3/9}>
            <Collapsible trigger={<ColoredCard cardcolor="orange" line1text="BECOME AN ADMINISTRATOR" />}>
              <ColoredCard 
                  cardcolor="orange" 
                  line1text="Administrative volunteers are needed in areas such as:"
                  lettersize1="15px" 
                  cardheight="300px" />
              <h1>BECOME AN ADMINISTRATOR</h1>
              <p>Administrative volunteers are needed in areas such as:</p>
              <ol>
                <li>Animal intake at our center</li>
                <li>Fundraising</li>
                <li>Marketing and Public Relations</li>
                <li>Community Outreach</li>
                <li>Education</li>
              </ol> 
              <p>...and more!</p>
            </Collapsible>
          </Box>
          <Box width={1/9}></Box>
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
