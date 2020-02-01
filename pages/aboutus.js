import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutUsBox from '../components/about/AboutUsBox';
import Title from '../components/util/Title';
import { Heading, Text, Box } from 'rebass';

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="About Us"></Title>
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
        <AboutUsBox heading="Box 2" description="Image"></AboutUsBox>
        <AboutUsBox heading="What We Do" description="Friends of Texas Wildlife is a group of trained and permitted volunteers who provide care for injured, displaced and orphaned wildlife in Montgomery and surrounding Counties."></AboutUsBox>
        <AboutUsBox heading="Box 2" description="Image"></AboutUsBox>
        <AboutUsBox heading="Education and Community Outreach" description="Friends of Texas Wildlife participates in many community, civic, and school events as a part of our education and outreach program."></AboutUsBox>
        <AboutUsBox heading="Box 2" description="Image"></AboutUsBox>
        <AboutUsBox heading="Our Intake Center" description="Our center functions as an intake facility where animals are admitted, triaged, and treated."></AboutUsBox>
        <AboutUsBox heading="Box 2" description="Image"></AboutUsBox>
        <AboutUsBox heading="Our Board Members" description="Our Board of Directors plays a critical role in guiding Friends of Texas Wildlife to meet the needs of the community."></AboutUsBox>
      </Box>

      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
