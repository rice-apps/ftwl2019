import React from 'react';
import { Box, Flex, Image, Button } from 'rebass';
import Link from 'next/link';
// import logo from "../static/ftwllogo.png";
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar" style={styles}>
      <Flex sx={{ justifyContent: 'center' }}>
        <Link href="/">
          <Box fontSize={2} ml={150} mr="auto" width="auto" height="auto" color="black">
            <Image sx={{ width: 116, height: 116, marginLeft: 0 }} src={'../static/ftwllogo.png'} />
          </Box>
        </Link>
        <Link href="/aboutus">
          <Box fontSize={2} ml="auto" mr="auto" width="auto" height="auto" color="black">
            <div className="box">About Us</div>
          </Box>
        </Link>
        <Link href="/waystogive">
          <Box fontSize={2} ml="auto" mr="auto" width="auto" height="auto" color="black">
            <div className="box">Ways to Give</div>
          </Box>
        </Link>
        <Link href="/foundanimal">
          <Box fontSize={2} ml="auto" mr="auto" width="auto" height="auto" color="black">
            <div className="box">Found an Animal?</div>
          </Box>
        </Link>
        <Box fontSize={2} ml="auto" mr="auto" width="auto" height="auto" color="black">
          <div className="box">News & Events</div>
        </Box>
        <Box fontSize={2} ml="auto" mr="auto" width="auto" height="auto" color="black">
          <div className="box">Store</div>
        </Box>
        <Box
          sx={{ verticalAlign: 'bottom' }}
          fontSize={2}
          ml="auto"
          mr="auto"
          width="auto"
          height="auto"
          color="black">
          <Button sx={{ backgroundColor: 'orange' }} variant="primary" mr={2}>
            Donate
          </Button>
        </Box>
        <Flex fontSize={2} ml="auto" mr={150} width="auto" height="auto" color="black" bg="white">
          <Flex>
            <Image src={'../static/Facebookicon.png'} variant="avatar" />
            <Image src={'../static/Instagramicon.png'} variant="avatar" />
            <Image src={'../static/Twittericon.png'} variant="avatar" />
          </Flex>
          <Link href="/contactus">
            <Button sx={{ backgroundColor: 'green' }} variant="primary" mr={2}>
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;

const styles = {
  backgroundColor: 'white',
  textColor: 'black',
};
