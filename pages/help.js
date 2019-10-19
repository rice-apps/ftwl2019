import Navbar from '../components/Navbar';
import { Heading, Button } from 'rebass';
import SmallCard from '../components/SmallCard';
// import theme from '../components/util/theme';

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
            paddingBottom: 200         
        }}>
            How You Can Help
        </Heading>

        <SmallCard 
        description= "Support us while you shop, both online and offline" 
        heading="Support Us While Shopping" 
        image="../static/shopping_basket.png"/>

    </div>
  );
}

export default Help;
