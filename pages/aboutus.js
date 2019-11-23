import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutUsBox from '../components/about/AboutUsBox';
import AboutUsGrid from '../components/about/AboutUsGrid';
import Title from '../components/util/Title';
import { Heading, Text, Box } from 'rebass';

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="About Us" subtitle="Saving Animals since 1994"></Title>
      <AboutUsGrid></AboutUsGrid>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
