import Form from '../components/contact/Form.js';
import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Title from '../components/util/Title.js';
import SmallCard from '../components/util/SmallCard.js';

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title={'Contact Us'}></Title>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
