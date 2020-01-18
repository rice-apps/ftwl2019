import AboutUsBox from './AboutUsBox';
import { Box } from 'rebass';
import LearnMoreButton from '../util/LearnMoreButton';

function AboutUsGrid(props) {
  return (
    <Box
      style={{
        marginLeft: '170px',
        marginRight: '170px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: '150px',
      }}>
      {/* if you want to add a Learn More button then simply assign
      the learnMore component to "yes" for AboutUsBox */}
      <AboutUsBox
        heading="Our Mission"
        description="We support the rehabilitation of native Texas wildlife and promote co-existence of wildlife and people through education."
        color="white"></AboutUsBox>

      <AboutUsBox color="#C4C4C4"></AboutUsBox>

      <AboutUsBox
        heading="What We Do"
        description="Friends of Texas Wildlife is a group of trained and permitted volunteers who provide care for injured, displaced and orphaned wildlife in Montgomery and surrounding Counties."
        color="white"></AboutUsBox>

      <AboutUsBox color="#C4C4C4"></AboutUsBox>

      <AboutUsBox
        heading="Education and Community Outreach"
        description="Friends of Texas Wildlife participates in many community, civic, and school events as a part of our education and outreach program."
        color="white"
        learnMore="yes"></AboutUsBox>

      <AboutUsBox color="#C4C4C4"></AboutUsBox>

      <AboutUsBox
        heading="Our Intake Center"
        description="Our center functions as an intake facility where animals are admitted, triaged, and treated."
        color="white"
        learnMore="yes"></AboutUsBox>

      <AboutUsBox color="#C4C4C4"></AboutUsBox>

      <AboutUsBox
        heading="Our Board Members"
        description="Our Board of Directors plays a critical role in guiding Friends of Texas Wildlife to meet the needs of the community."
        color="white"
        learnMore="yes"></AboutUsBox>
    </Box>
  );
}

export default AboutUsGrid;
