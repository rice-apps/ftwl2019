import React from 'react';
import { Box, Flex, Button, Image } from 'rebass';
import './MemberContent.css';

function MemberContent() {
    return (
        <div className="Member">
            <div className="MemberImages">
                <Image
                    src={'../static/donate/3.png'}
                    sx={{
                        width: ['325px', '325px'],
                    }}
                    padding="20px"
                />
                <Image
                    src={'../static/donate/4.png'}
                    sx={{
                        width: ['325px', '325px'],
                    }}
                    padding="20px"
                />
            </div>
            <div className="MemberText">
                <h1>For just $1 per week, you can help
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
                <p>All members will receive a yearly membership card,
                quarterly newsletters, discounts on t-shorts or other
                merchandise, and a small gift as our way of saying thank you.</p>
                <p>Memberships can also be mailed to Friends of Texas
                    Wildlife, 29615 Highland Boulevard, Magnolia TX 77354.</p>
                <a href={"https://www.paypal.com/donate/?token=ZArjyekKpIC8FpCW2qrkq2wMQ3jnd7XYQgFnnxwnPgzem8v2IAI0AGtMVzFNFAdFhVjxcm&fromUL=true&country.x=US&locale.x=en_US"} target="_blank" style={{ textDecoration: "none" }}>
                    <Button style={{ cursor: "pointer" }} variant='outline' color='green'>BECOME A MONTHLY DONOR</Button>
                </a>
            </div>
        </div>
    );
}

export default MemberContent;