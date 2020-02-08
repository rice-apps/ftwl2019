import React from 'react';
import { Box, Flex, Image, Button } from 'rebass';
import Link from 'next/link';
import logo from '../../static/ftwllogo.png';
// import json from './Navbar.json';
// import { navbar_headers } from './navbar.json';
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
        to: '/found-animal/bunny',
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
  // let style = {
  //   backgroundColor: "#515768"
  //     }
  let style = {
    paddingTop: '15px',
    paddingBottom: '15px',
    color: '#515768',
    backgroundColor: '#DCDFE5',
  };

  return (
    <div className="navbar-wrapper" style={style}>
      <Box ml={150} mr="auto" width="auto" height="auto" color="black">
        <Link href="/">
          <Image sx={{ width: 100, height: 100 }} src={logo} />
        </Link>
      </Box>
      {navbar_headers.map(({ name, to, subheaders, absoluteTo }) => (
        <div className="navbar-category" key={name}>
          {absoluteTo ? (
            <a href={absoluteTo} className="navbar-dropdown-absolute">
              <button className="navbar-dropdown-opener">{name}</button>
            </a>
          ) : (
            <Link href={to}>
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
  );
}

export default Navbar;

const styles = {
  backgroundColor: 'white',
  textColor: 'black',
};
