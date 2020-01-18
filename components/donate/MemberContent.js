import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';

function MemberContent() {
    return (
        <Flex align="center">
            <Box width={1 / 5}></Box>
            <Box width={1 / 2}>
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['325px', '325px'],
                    }}
                    padding="20px"
                />
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['325px', '325px'],
                    }}
                    padding="20px"
                />
            </Box>
            <Box width={1 / 2}>
                <h1>For just $1 per week, you can help<br></br>
                    support the wildlife we assist.</h1>
                <p>
                    Supporting membership, individual:
                </p>
                <h2>$52 per year</h2>
                <p>
                    Supporting membership, family:
                </p>
                <h2>$75 per year</h2>
                <p>Lifetime membership:</p>
                <h2>$5000 per year</h2>
                <p>All members will receive a yearly membership card,<br></br>
                    quarterly newsletters, discounts on t-shorts or other<br></br>
                    merchandise, and a small gift as our way of saying thank<br></br>
                    you.<br></br></p>
                <p>Memberships can also be mailed to Friends of Texas<br></br>
                    Wildlife, ...</p>
                <Button variant='outline' color='green'>BECOME A MONTHLY DONOR</Button>
            </Box>
            <Box width={1 / 5}></Box>
        </Flex>
    );
}

export default MemberContent;