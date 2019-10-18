import React from 'react';
import { Box, Flex, Image, Button } from 'rebass';
// import logo from "../static/ftwllogo.png";
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar" style={styles}>
      <Flex>
        <Box
          fontSize={2}
          width={[1 / 8, 1 / 8, 1 / 8]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          ml="auto"
          mr="auto"
          color="black"
          bg="white">
          <Image src={'../static/ftwllogo.png'} />
        </Box>
        <Box
          fontSize={2}
          ml="auto"
          mr="auto"
          width={[1 / 8, 1 / 8, 1 / 8]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          color="black"
          bg="red">
          About Us
        </Box>
        <Box
          fontSize={2}
          width={[1 / 8, 1 / 8, 1 / 8]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          color="black"
          bg="orange">
          Ways to Give
        </Box>
        <Box
          fontSize={2}
          width={[1 / 8, 1 / 8, 1 / 8]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          color="black"
          bg="yellow">
          Found an Animal?
        </Box>
        <Box
          fontSize={2}
          width={[1 / 8, 1 / 8, 1 / 8]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          color="black"
          bg="green">
          News & Events
        </Box>
        <Box
          fontSize={2}
          width={[1 / 2, 1 / 2, 1 / 2]}
          height={[1 / 16, 1 / 16, 1 / 16]}
          color="black"
          bg="white">
          <Flex>
            <Image src={'../static/Facebookicon.png'} variant="avatar" />
            <Image src={'../static/Instagramicon.png'} variant="avatar" />
            <Image src={'../static/Twittericon.png'} variant="avatar" />
          </Flex>
          <Flex>
            <Button variant="primary" mr={2}>
              Donate
            </Button>
            <Button variant="secondary" mr={2}>
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default Navbar;

const styles = {
  'background-color': 'white',
  'text-color': 'black',
  'padding-bottom': 120,
};
