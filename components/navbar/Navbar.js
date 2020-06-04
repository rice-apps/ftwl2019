import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Image, Button } from 'rebass';
import Link from 'next/link';
import logo from '../../static/ftwllogo.png';
// import json from './Navbar.json';
import { navbar_headers } from './Navbar.json';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubheaders, setShowSubheaders] = useState(false);
  const [subheaderIndex, setSubheaderIndex] = useState(0);

  let displayMenu = showMenu ? { display: 'block' } : { display: 'none' };
  let displayHeaders = showMenu && !showSubheaders ? { display: 'block' } : { display: 'none' };
  let displaySubheaders = showMenu && showSubheaders ? { display: 'block' } : { display: 'none' };

  let subheader = (
    <div className="dropdown-subheaders-mobile">
      <button
        className="return-to-headers-mobile"
        onClick={() => {
          setShowSubheaders(false);
        }}>
        &#10094;
      </button>
      {navbar_headers[subheaderIndex].subheaders.map(({ name, to }) => (
        <Link href={to} key={name}>
          <a className="dropdown-subheaders-link-mobile">{name}</a>
        </Link>
      ))}
    </div>
  );

  const menu = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    if (menu.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowMenu(false);
    setShowSubheaders(false);
  };

  return (
    <div className="navbar-wrapper">
      <div
        className="fixed-mobile-header"
        onClick={() => {
          setShowMenu(!showMenu);
        }}>
        <img className="show-navbar" src="https://icon.now.sh/burger/114B0B/40" alt="Menu" />
      </div>

      <div className="navbar-menu-mobile" style={displayMenu} ref={menu}>
        <div className="navbar-headers-mobile" style={displayHeaders}>
          {navbar_headers.map(({ name, to, absoluteTo }, index) => (
            <div className="navbar-category-mobile" key={name}>
              {absoluteTo ? (
                <a href={absoluteTo} target="_blank" className="navbar-mobile-absolute">
                  <button className="navbar-mobile-opener">{name}</button>
                </a>
              ) : (
                <div>
                  <Link href={to}>
                    <button className="navbar-mobile-opener">{name}</button>
                  </Link>
                  <button
                    className="navbar-mobile-opener-arrow"
                    onClick={() => {
                      setShowSubheaders(true);
                      setSubheaderIndex(index);
                    }}>
                    &#x276F;
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-subheaders-mobile" style={displaySubheaders}>
          {subheader}
        </div>
      </div>

      <Box className="header-logo" width="auto" height="auto" color="black">
        <Link href="/">
          <Image sx={{ width: 100, height: 100 }} src={logo} />
        </Link>
      </Box>

      <div className="navbar-headers-desktop">
        {navbar_headers.map(({ name, to, subheaders, absoluteTo }) => (
          <div className="navbar-category" key={name}>
            {absoluteTo ? (
              <a href={absoluteTo} target="_blank" className="navbar-dropdown-absolute">
                <button className="navbar-dropdown-opener">{name}</button>
              </a>
            ) : (
              <Link href={to}>
                <button className="navbar-dropdown-opener">
                  {name}{' '}
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 9L14.5 1" stroke="#5A5A5A" stroke-width="2" />
                  </svg>
                </button>
              </Link>
            )}
            <div className="dropdown-subheaders">
              {subheaders.map(({ name, to }) => (
                <Link href={to} key={name}>
                  <a>{name}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="navbar-right-container">
        <div className="navbar-icons">
          <a href={'https://www.facebook.com/SavingTexasWildlife'} target="_blank">
            <Image
              src={'../static/icons/facebook-icon.png'}
              sx={{
                width: ['30px', '30px'],
              }}
              padding="3px"
            />
          </a>

          <a href={'https://twitter.com/FriendsofTexas'} target="_blank">
            <Image
              src={'../static/icons/twitter-icon.png'}
              sx={{
                width: ['30px', '30px'],
              }}
              padding="3px"
            />
          </a>
        </div>

        <div className="navbar-buttons">
          <a
            href={
              'https://www.paypal.com/donate?token=Y1QpToJ2gxrxXwAVfnIMtQibxBteaow75FHkSi9-emAPI2gWsi8ekMM2cfOXFSd4G6m_C0&country.x=US&locale.x=US'
            }
            target="_blank">
            <Button
              style={{
                backgroundColor: 'orange',
                borderRadius: '15px',
                width: '115px',
                marginTop: '5px',
              }}
              mr={2}>
              Donate
            </Button>
          </a>

          <Link href={'contactus'}>
            <a href={'https://www.facebook.com/SavingTexasWildlife'}>
              <Button
                style={{
                  backgroundColor: 'green',
                  borderRadius: '15px',
                  width: '115px',
                  marginTop: '5px',
                }}
                mr={2}>
                Contact Us
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
