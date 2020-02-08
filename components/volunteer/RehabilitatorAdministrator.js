import ColoredCard from '../util/ColoredCard.js';
import { Box, Flex} from 'rebass';
import './RehabilitatorAdministrator.css';

function Rehabilitator() {
    return (
        <div className="content">
            <Flex justifyContent="space-around" >
                <Box>
                    <ColoredCard cardcolor="#EE9C3B" line1text="REHABILITATORS" letterspacing="2px" cardwidth="425px" cardheight="175px"/>
                </Box>
                <Box>
                    <ColoredCard cardcolor="#EE9C3B" line1text="ADMINISTRATORS" letterspacing="2px" cardwidth="425px" cardheight="175px"/>
                </Box>
            </Flex>
        </div>
    );
}

export default Rehabilitator