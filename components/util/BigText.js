import React from 'react';
import { Box } from 'rebass';
import './Title.css';

function Title(props) {
  return (
    <Box className="title-container" width={props.width} ml="auto" mr="auto">
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400i&display=swap"
        rel="stylesheet"></link>
      <div className="title">{props.title}</div>
      <p className="subtitle">{props.subtitle}</p>
    </Box>
  );
}

export default Title;
