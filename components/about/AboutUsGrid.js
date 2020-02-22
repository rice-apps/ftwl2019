import AboutUsBox from './AboutUsBox';
import { Box } from 'rebass';
import LearnMoreButton from '../util/LearnMoreButton';
import AboutUsImageBox from './AboutUsImageBox';

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
      marginBottom: '170px'
    }}>
    <AboutUsBox heading="Our Mission" description="We support the rehabilitation of native Texas wildlife and promote co-existence of wildlife and people through education."></AboutUsBox>
    <AboutUsImageBox img="1.png"></AboutUsImageBox>
    <AboutUsBox heading="What We Do" description="Friends of Texas Wildlife is a group of trained and permitted volunteers who provide care for injured, displaced and orphaned wildlife in Montgomery and surrounding Counties."></AboutUsBox>
    <AboutUsImageBox img="2.png"></AboutUsImageBox>
    <AboutUsBox heading="Education and Community Outreach" description="Friends of Texas Wildlife participates in many community, civic, and school events as a part of our education and outreach program."></AboutUsBox>
    <AboutUsImageBox img="3.png"></AboutUsImageBox>
    <AboutUsBox heading="Our Intake Center" description="Our center functions as an intake facility where animals are admitted, triaged, and treated."></AboutUsBox>
    <AboutUsImageBox img="4.png"></AboutUsImageBox>
    <AboutUsBox heading="Our Board Members" description="Our Board of Directors plays a critical role in guiding Friends of Texas Wildlife to meet the needs of the community."></AboutUsBox>
  </Box>
);
}

export default AboutUsGrid;
