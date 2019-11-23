import { Box } from 'rebass';
import './LearnMoreButton.css';

function LearnMoreButton() {
    return(
        <div>
            <Box
             width="230px"
             height="45px"
             className ="LearnMoreBox"
            >
                <h1 className ="LearnMoreText">
                    LEARN MORE
                </h1>

            </Box>
        </div>
    );
}

export default LearnMoreButton;