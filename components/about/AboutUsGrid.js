    
import AboutUsBox from './AboutUsBox';
import {Box} from 'rebass';   
import LearnMoreButton from '../util/LearnMoreButton';
    
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

      {/* if you want to add a Learn More button then simply assign
      the learnMore component to "yes" for AboutUsBox */}
        <AboutUsBox heading="Our Mission" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom " color="white">
        </AboutUsBox>    
        
        <AboutUsBox color="#C4C4C4"></AboutUsBox>

        <AboutUsBox heading="What We Do" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"></AboutUsBox>
       
        <AboutUsBox  color="#C4C4C4"></AboutUsBox>
       
        <AboutUsBox heading="Education and Community Outreach" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white" learnMore="yes"></AboutUsBox>
       
        <AboutUsBox color="#C4C4C4"></AboutUsBox>
       
        <AboutUsBox heading="Our Intake Center" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white" learnMore="yes"></AboutUsBox>
        
        <AboutUsBox  color="#C4C4C4"></AboutUsBox>
        
        <AboutUsBox heading="Our Board Members" description="ur mom ur mom ur mom ur mom ur mom ur mom ur mom ur 
        mom ur momur mom ur mom ur mom ur mom ur momur mom ur mom ur mom ur mom ur mom ur mom ur mom ur mom" color="white"learnMore="yes"></AboutUsBox>
     </Box>
    );
}

export default AboutUsGrid; 
