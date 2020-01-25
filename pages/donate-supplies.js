import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Title from '../components/util/Title.js';
import DonateSuppliesBody from '../components/donate-supplies/DonateSupplies';

function DonateSupplies() {
  return (
    <div>
      <Navbar></Navbar>
      <Title title="Donate Supplies"></Title>
      <DonateSuppliesBody />
      <Footer></Footer>
    </div>
  );
}

export default DonateSupplies;
