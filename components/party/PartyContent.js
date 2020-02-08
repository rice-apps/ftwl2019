import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import ColoredCard from "../util/ColoredCard.js";
import './PartyContent.css'

function PartyContent() {
    return (
        <Flex>
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <h1>Give your child a wild party</h1>
                <p>We offer birthday parties for every age group:</p>
                <p><b>Wild Babies</b><br></br>
                    Meet a furry friend and learn how to help wildlife<br></br>
                    Ages 4-6
                </p>
                <p><b>Scales &amp; Tails</b><br></br>
                    Critters that slither and crawl<br></br>
                    Ages 7-9
                </p>
                <p><b>Hoot, Hoot, Hooray</b><br></br>
                    A feathered friend will fly your way<br></br>
                    Ages 7-10+
                </p>
                <p><b>Critter CSI</b><br></br>
                    Find out which animal left its tracks<br></br>
                    Ages 10+
                </p>
                <p>
                    All parties are scheduled for 2 hours:<br></br>
                    15 min. set up by parents<br></br>
                    60 min. for wildlife program*<br></br>
                    30 min. for celebration (cake, open gifts)<br></br>
                    15 min. for clean-up by parents<br></br>
                </p>
                <p>
                    Please encourage guests to arrive on time. Party will start and end
                    at scheduled time. If it rains, the party is held inside, and any
                    outdoor games will be moved inside.
                </p>
                <h1>What we provide:</h1>
                <p>Party Host, decorations, craft/activity, and a special gift for the
                    birthday child.
                </p>
                <h1>What you provide:</h1>
                <p>Refreshments (snacks, drinks, cake). Please note that there is no
                    refrigerator or stove available. Local pizza may be ordered and
                    delivered to 29816 Dobbin Hufsmith, Magnolia, 77354
                </p>
                <h1>Pricing:</h1>
                <p>$300 - limit 15 children including siblings, $10 per additional child,
                    maximum 25 children. Guest limit 35 (includes both children and parents)
                </p>
                <p>
                    $100 deposit: $50 to hold date and $50 security desposit.<br></br>
                    Balance due before party begins.
                </p>
                <h1>Scheduling:</h1>
                <p>Party times are 10:00 a.m., 1:00 p.m. and 4:00 p.m. on Saturdays.<br></br>
                    Fridays 4:00 p.m. only.
                </p>
            </Box>
            <Box width={1 / 2}>
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['400px', '400px'],
                    }}
                    padding="20px"
                />
                <div className='cards'>
                    <ColoredCard cardwidth="400px" cardcolor="orange" line1text="CALL US" line2text="281-259-0039"></ColoredCard>
                    <br></br>
                    <br></br>
                    <ColoredCard cardwidth="400px" cardcolor="orange" line1text="EMAIL US" line2text="ftwl.education@gmail.com"></ColoredCard>
                </div>
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default PartyContent;