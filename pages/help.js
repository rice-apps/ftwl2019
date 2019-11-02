import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpDeck from '../components/HelpDeck';
import deck from '../components/data/helpdeck.json';
import Title from '../components/Title';

function Help() {
  return (
    <div>
        <Navbar/>
        <Title title={"How You Can Help"} subtitle={"The animals need your help!"}></Title>
        <HelpDeck cards={deck.cards}/>
        <Footer/>
    </div>
  );
}

export default Help;
