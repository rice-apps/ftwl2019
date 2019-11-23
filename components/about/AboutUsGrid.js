    
import AboutUsBox from './AboutUsBox';
import {Box} from 'rebass';   
    
function AboutUsGrid(props) {
    return (
        <Box
        style={{
          marginLeft: '170px',
          marginRight: '170px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingBottom: '150px',
        }}>
        <AboutUsBox heading="Our Mission" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>    
        
        <AboutUsBox color="#C4C4C4"></AboutUsBox>

        <AboutUsBox heading="What We Do" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>
       
        <AboutUsBox  color="#C4C4C4"></AboutUsBox>
       
        <AboutUsBox heading="Education and Community Outreach" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>
       
        <AboutUsBox color="#C4C4C4"></AboutUsBox>
       
        <AboutUsBox heading="Our Intake Center" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>
        
        <AboutUsBox  color="#C4C4C4"></AboutUsBox>
        
        <AboutUsBox heading="Our Board Members" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>
     </Box>
    );
}

export default AboutUsGrid; 
