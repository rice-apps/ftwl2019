import React from 'react';
import { Box, Flex, Image } from 'rebass';
// import './Footer.css';

function Footer() {
  return (
    <div className="footer" style={styles}>
      <Flex>
        <Box p={5} fontSize={2} width={[1 / 2, 1 / 2, 1 / 2]} color="white" bg="green">
          <h1>Friends of Texas Wildlife</h1>
          <p>
            Friends of Texas Wildlife is a 501(c)(3) non-profit organization; 100% of all donations
            support native Texas wildlife and are tax deductible to the extent permitted by law.
          </p>
        </Box>

        <Box p={5} fontSize={2} width={[1 / 2, 1 / 2, 1 / 2]} color="white" bg="green">
          <h1>Contact Us</h1>
          <p>
            Friends of Texas Wildlife<br></br>
            29615 Highland Blvd<br></br>
            Magnolia, TX 77354<br></br>
            (281) 259-0039<br></br>
            ftwl.center@gmail.com
          </p>
          {/* <ul style={{ "list-style-type": "none" }}>
                        <li>Friends of Texas Wildlife</li>
                        <li>29615 Highland Blvd</li>
                        <li>Magnolia, TX 77354</li>
                        <li>(281) 259-0039</li>
                        <li>ftwl.center@gmail.com</li>
                    </ul> */}
        </Box>

        {/* Bottom tabs */}
        <Box p={5} fontSize={2} width={[1, 1, 1]} color="white" bg="green">
          <Flex>
            <Box
              p={5}
              fontSize={2}
              width={[1, 1, 1]}
              color="white"
              bg="green"
              padding="10px 20px 10px 20px">
              About Us
            </Box>
            <Box
              p={5}
              fontSize={2}
              width={[1, 1, 1]}
              color="white"
              bg="green"
              padding="10px 20px 10px 20px">
              Ways to Give
            </Box>
            <Box
              p={5}
              fontSize={2}
              width={[1, 1, 1]}
              color="white"
              bg="green"
              padding="10px 20px 10px 20px">
              Found an Animal
            </Box>
            <Box
              p={5}
              fontSize={2}
              width={[1, 1, 1]}
              color="white"
              bg="green"
              padding="10px 20px 10px 20px">
              News and Events
            </Box>
            <Box
              p={5}
              fontSize={2}
              width={[1, 1, 1]}
              color="white"
              bg="green"
              padding="10px 20px 10px 20px">
              Store
            </Box>
          </Flex>
        </Box>

        {/* Facebook, Twitter, Instagram
                <Flex>
                    <Box p={5} fontSize={2} width={[1, 1, 1]} color='white' bg='green'>
                    </Box>
                    <Box p={5} fontSize={2} width={[1, 1, 1]} color='white' bg='green'>
                    </Box>
                    <Box p={5} fontSize={2} width={[1, 1, 1]} color='white' bg='green'>
                    </Box>
                </Flex> */}
      </Flex>
    </div>
  );
}

export default Footer;

const styles = {
  'background-color': 'red',
  //"object-fit": "cover",
  //"width": "100%",
  //"position": "absolute",
  //"padding": "64px 0px 64px 16px",
};
