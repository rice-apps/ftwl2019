import Navbar from '../components/Navbar';
import { Heading, Text } from 'rebass';
import HelpDeck from '../components/HelpDeck';
// import theme from '../components/util/theme';
import deck from '../components/data/helpdeck.json';

function Help() {
  return (
    <div>
        <Navbar/>
        <Heading fontSize={[ 5, 6, 7 ]} 
        sx={{
            textAlign : "center",
            fontFamily: 'cursive',
            fontWeight: 400, 
            color: "green",
        }}>
            How You Can Help
        </Heading>

        <Text
        sx={{
            textAlign : "center",
            fontFamily: 'Helvetica',
            fontWeight: 400, 
            paddingBottom: 200         
        }}>
            Description
        </Text>

        <HelpDeck cards={deck.cards}/>
    </div>
  );
}

export default Help;
