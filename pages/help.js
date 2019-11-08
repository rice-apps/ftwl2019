import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HelpDeck from '../components/util/HelpDeck';
import deck from '../components/data/helpdeck.json';
import Title from '../components/util/Title';

function Help() {
  return (
    <div>
      <Navbar />
      <Title title={'How You Can Help'} subtitle={'The animals need your help!'}></Title>
      <HelpDeck cards={deck.cards} />
      <Footer />
    </div>
  );
}

export default Help;
