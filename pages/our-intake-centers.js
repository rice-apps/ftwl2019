import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Title from '../components/util/Title.js';
import IntakeCenter from '../components/intake-center/IntakeCenter';
import VisitorCenter from '../components/intake-center/VisitorCenter';


function OurIntakeCenters() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Our Intake Center"></Title>
      <IntakeCenter></IntakeCenter>
      <VisitorCenter></VisitorCenter>
      <Footer></Footer>
      
    </div>
  );
}

export default OurIntakeCenters;
