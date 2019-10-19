import React from 'react';
import { Box, Flex, Image } from 'rebass';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"></link>
      </head>
      <Flex>
        <Box p={5} fontSize={2} width={[1 / 4, 1 / 4, 1 / 4]} color="white"></Box>
        <Box
          p={5}
          fontSize={2}
          width={[3 / 5, 3 / 5, 3 / 5]}
          color="white"
          padding="64px 30px 64px 0px">
          <div class="footer-header">Friends of Texas Wildlife</div>
          <div class="footer-info">
            <p>
              Friends of Texas Wildlife is a 501(c)(3) non-profit organization; 100% of all
              donations support native Texas wildlife and are tax deductible to the extent permitted
              by law.
            </p>
          </div>
        </Box>

        <Box
          p={5}
          fontSize={2}
          width={[2 / 5, 2 / 5, 2 / 5]}
          color="white"
          padding="64px 0px 64px 0px">
          <div class="footer-header">Contact Us</div>
          <div class="footer-info">
            <p>
              Friends of Texas Wildlife<br></br>
              29615 Highland Blvd<br></br>
              Magnolia, TX 77354<br></br>
              (281) 259-0039<br></br>
              ftwl.center@gmail.com
            </p>
          </div>
          {/* <ul style={{ "list-style-type": "none" }}>
                        <li>Friends of Texas Wildlife</li>
                        <li>29615 Highland Blvd</li>
                        <li>Magnolia, TX 77354</li>
                        <li>(281) 259-0039</li>
                        <li>ftwl.center@gmail.com</li>
                    </ul> */}
        </Box>

        {/* Bottom tabs */}
        <Box
          p={5}
          fontSize={2}
          width={[1, 1, 1]}
          color="white"
          padding="64px 0px 64px 20px"
          height="100px">
          <Flex>
            <Box
              p={5}
              fontSize="13px"
              width={[2 / 3, 2 / 3, 2 / 3]}
              color="white"
              padding="0px 10px 10px 10px">
              About Us
            </Box>
            <Box p={5} fontSize="13px" width={[1, 1, 1]} color="white" padding="0px 10px 10px 10px">
              Ways to Give
            </Box>
            <Box
              p={5}
              fontSize="13px"
              width={[2 / 3, 2 / 3, 2 / 3]}
              color="white"
              padding="0px 10px 10px 10px">
              Found an Animal
            </Box>
            <Box
              p={5}
              fontSize="13px"
              width={[2 / 3, 2 / 3, 2 / 3]}
              color="white"
              padding="0px 10px 10px 10px">
              News &amp; Events
            </Box>
            <Box
              p={5}
              fontSize="13px"
              width={[2 / 3, 2 / 3, 2 / 3]}
              color="white"
              padding="0px 10px 10px 10px">
              Store
            </Box>
          </Flex>
          <Box>
            <Flex>
              <Box p={5} fontSize={2} width={[1, 1, 1]} color="white" bg="green"></Box>
              <Box p={5} fontSize={2} width={[1, 1, 1]} color="white" bg="green"></Box>
              <Box p={5} fontSize={2} width={[1, 1, 1]} color="white" bg="green"></Box>
            </Flex>
          </Box>
        </Box>
        <Box p={5} fontSize={2} width={[1 / 4, 1 / 4, 1 / 4]} color="white"></Box>
      </Flex>
    </div>
  );
}

export default Footer;
