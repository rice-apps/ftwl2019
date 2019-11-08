import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUsBox from '../components/AboutUsBox';
import Title from '../components/Title';
import { Heading, Text, Box } from 'rebass';

function AboutUs() {
    return(
        <div>
           <Navbar></Navbar> 
           <Title title="About Us"></Title>
           <Box 
           style={{
               marginLeft: "170px",
               marginRight: "170px",
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
               justifyContent: "center",
               }}>
                   <AboutUsBox heading="Box 1" description="urmomkjsdfgkljsdflkgjslfdkjgklfsdjgkljsdflkgjsdfkgskldfjgkljsdfglkjdsfklgjlsdjgflkjsdlfgjsdflkjglksdfjgkl lksdjfgljsd gkl jdslg"></AboutUsBox>
                   <AboutUsBox heading="Box 1" description="urmom"></AboutUsBox>
                   <AboutUsBox heading="Box 1" description="urmom"></AboutUsBox>
                   <AboutUsBox heading="Box 1" description="urmom"></AboutUsBox>
           </Box>

           {/* <Footer></Footer> */}
        </div>
    );
}

export default AboutUs;