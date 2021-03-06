import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import './DonateContent.css';

function DonateContent() {
    return (
        <div className="Donate">
            <div className="DonateText">
                <h1>Every dollar helps us save animals.</h1>
                <p>
                    We depend entirely on donations to provide for the
                    veterinary care that saves the lives of the
                    malnourished, seriously ingured, and sick wildlife.
                </p>

                <a href={"https://www.paypal.com/donate?token=Y1QpToJ2gxrxXwAVfnIMtQibxBteaow75FHkSi9-emAPI2gWsi8ekMM2cfOXFSd4G6m_C0&country.x=US&locale.x=US"} target="_blank" style={{ textDecoration: "none" }}>
                    <Button style={{ cursor: "pointer" }} variant='outline' color='green'>DONATE</Button>
                </a>

                <h1>Do you know how much it costs to
                    rehabilitate an animal?</h1>
                <Flex>
                    <Box>
                        <ul>
                            <li>$25</li>
                            <li>$50</li>
                            <li>$100</li>
                            <li>$500</li>
                        </ul>
                    </Box>
                    <Box>
                        <ul>
                            <li>Provides one month care for song birds</li>
                            <li>Takes care of a rabbit through release</li>
                            <li>Takes care of a squirrel through release</li>
                            <li>Takes care of a raptor through release</li>
                        </ul>
                    </Box>
                </Flex>
            </div>
            <div className="DonateImages">
                <Image
                    src={'../static/donate/1.png'}
                    sx={{
                        width: ['325px', '325px'],
                    }}
                    padding="20px"
                />
                <Image
                    src={'../static/donate/2.png'}
                    sx={{
                        width: ['325x', '325px'],
                    }}
                    padding="20px"
                />
            </div>
        </div>
    );
}

export default DonateContent;