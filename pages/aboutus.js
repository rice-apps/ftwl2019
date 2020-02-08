import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutUsBox from '../components/about/AboutUsBox';
import Title from '../components/util/Title';
import { Heading, Text, Box } from 'rebass';

import AboutUsGrid from '../components/about/AboutUsGrid';

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="About Us"></Title>
      <AboutUsGrid/>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
