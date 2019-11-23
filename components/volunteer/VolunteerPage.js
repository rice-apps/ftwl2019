import VolunteerHeader from './VolunteerHeader.js';
import RehabilitatorAdministrator from './RehabilitatorAdministrator.js';
import { Box, Button } from 'rebass';
import './VolunteerPage.css';

function Volunteer() {
    return (
      <div>
        <VolunteerHeader />
        <RehabilitatorAdministrator />
        <div className="button">
          <Button border="5px" color="#114B0B" variant='outline' sx={{margin:4}} letterSpacing="1px"><b>CLICK HERE TO VOLUNTEER!</b></Button>
        </div>
      </div>
    );
  }
  
  export default Volunteer;
  