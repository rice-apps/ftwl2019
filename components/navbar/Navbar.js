import React from 'react';
import { Box, Flex, Image, Button } from 'rebass';
import Link from 'next/link';
import logo from '../../static/ftwllogo.png';
import './Navbar.css';

var navbar_headers = [
  {
    name: 'About Us',
    to: '/aboutus',
    subheaders: [
      {
        name: 'Education and Community Outreach',
        to: '/education-and-outreach',
      },
      {
        name: 'Our Intake Centers',
        to: '/our-intake-centers',
      },
      {
        name: 'Our Board Members',
        to: '/our-board-members',
      },
    ],
  },
  {
    name: 'Ways to Give',
    to: '/waystogive',
    subheaders: [
      {
        name: 'Volunteer',
        to: '/volunteer',
      },
      {
        name: 'Donate',
        to: '/donate',
      },
      {
        name: 'Host A Party',
        to: '/host-a-party',
      },
      {
        name: 'Donate Supplies',
        to: '/donate-supplies',
      },
      {
        name: 'Support Us While Shopping',
        to: '/support-us-while-shopping',
      },
    ],
  },
  {
    name: 'Found an Animal?',
    to: '/foundanimal',
    subheaders: [
      {
        name: 'Rabbits',
        to: '/found-animal/rabbit',
      },
      {
        name: 'Squirrels',
        to: '/found-animal/squirrel',
      },
      {
        name: 'Birds',
        to: '/found-animal/bird',
      },
      {
        name: 'Fawns',
        to: '/found-animal/fawn',
      },
    ],
  },
  {
    name: 'News & Events',
    to: '/events',
    subheaders: [
      {
        name: 'Upcoming Events',
        to: '/events',
      },
      {
        name: 'Announcements',
        to: '/events',
      },
      {
        name: 'Animal Stories',
        to: '/events',
      },
      {
        name: 'Past Events',
        to: '/events',
      },
    ],
  },
  {
    name: 'Store',
    absoluteTo: 'https://squareup.com/store/FTWL',
    subheaders: [],
  },
];

function Navbar() {
  let style = {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingRight: '15px',
    color: '#515768',
  };

  return (
    <div className="navbar-wrapper" style={style}>

          <Box className="header-logo" width="auto" height="auto" color="black">
            <Link href="/">
              <Image sx={{ width: 100, height: 100 }} src={logo} />
            </Link>
          </Box>

          <div style={{paddingLeft:30, paddingRight:30, paddingTop: 50}}>
            {navbar_headers.map(({ name, to, subheaders, absoluteTo }) => (
              <div className="navbar-category" key={name}>
                {absoluteTo ? (
                  <a href={absoluteTo} target="_blank" className="navbar-dropdown-absolute">
                    <button className="navbar-dropdown-opener">{name}</button>
                  </a>
                ) : (
                  <Link href={to} className="navbar-dropdown-absolute">
                    <button className="navbar-dropdown-opener">{name}</button>
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

    <div style={{display:"flex", flexDirection: "column", textAlign:"center"}}>
      <div style={{display:"flex", flexDirection: "row", marginLeft: "auto", marginRight:0}}>

          <a href={"https://www.facebook.com/SavingTexasWildlife"} target="_blank" style={{textDecoration:"none"}}>
            <Image
              src={'../static/icons/facebook-icon.png'}
              sx={{
                width: ['30px', '30px'],
              }}
              padding="3px"
            />
          </a>

          <a href={"https://twitter.com/FriendsofTexas"} target="_blank" style={{textDecoration:"none"}}>
            <Image
              src={'../static/icons/twitter-icon.png'}
              sx={{
                width: ['30px', '30px'],
              }}
              padding="3px"
            />
          </a>

          </div>

      <div style={{display:"flex", flexDirection: "row", marginLeft: "auto", marginRight:0}}>

          <a href={"https://www.paypal.com/donate?token=Y1QpToJ2gxrxXwAVfnIMtQibxBteaow75FHkSi9-emAPI2gWsi8ekMM2cfOXFSd4G6m_C0&country.x=US&locale.x=US"} target="_blank" style={{textDecoration:"none"}}>
            <Button style={{cursor:"pointer", color: "white", backgroundColor:"orange"}} mr={2}>Donate</Button>
          </a>
          
          <Link href={"contactus"}>
          <a href={"https://www.facebook.com/SavingTexasWildlife"} style={{textDecoration:"none"}}>
            <Button style={{cursor:"pointer", color: "white", backgroundColor:"green"}} mr={2}>Contact Us</Button>
          </a>
          </Link>
          </div>

      </div>


    </div>
  );
}

export default Navbar;
