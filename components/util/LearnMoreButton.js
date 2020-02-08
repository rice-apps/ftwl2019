import React from 'react';
import { Button, Box, Border } from 'rebass';
import './LearnMoreButton.css'
 
function LearnMoreButton(props) {
    return (
        <div>

            <Button
            width={240}
            height={60}
            sx={{border: '3px solid green'}}
            classname="learn-more-button"
            >
                <b className="learn-more-text">
                LEARN MORE
                </b>

            </Button>

        </div>
    );

}

export default LearnMoreButton; 