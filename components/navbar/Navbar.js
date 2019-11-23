 import React from 'react';
import { Box, Flex, Image, Button } from 'rebass';
import Link from 'next/link';
import logo from '../../static/ftwllogo.png';
// import json from './Navbar.json';
import { navbar_headers } from './navbar.json';
import './Navbar.css';

function Navbar() {
  // let style = {
  //   backgroundColor: "#515768"
  //     }
    let style = {
              paddingTop: '15px',
              paddingBottom: '15px',
              color: "#515768",
              backgroundColor: "#DCDFE5"
    } 

  return (
    <div className='navbar-wrapper' style={style}>
        <Link href="/">
          <Box ml={150} mr="auto" width="auto" height="auto" color="black">
            <Image sx={{ width: 100, height: 100}} src={logo} />
          </Box>
        </Link>
            {
                navbar_headers.map(({ name, to, subheaders, absoluteTo}) => (
                    <div className='navbar-category' key={name}>
                        {absoluteTo ? 
                        <a href={absoluteTo}>
                          <button className='navbar-dropdown-opener'>
                              {name}
                          </button>
                        </a> : 
                        <Link href={to}>
                          <button className='navbar-dropdown-opener'>
                              {name}
                          </button>
                        </Link>
                        }
                        <div className='dropdown-subheaders'>
                            {
                                subheaders.map(({ name, to }) => (
                                    <Link href={to} key={name}><a>{name}</a></Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
    </div>
  );
}

export default Navbar;

const styles = {
  backgroundColor: 'white',
  textColor: 'black',
};
