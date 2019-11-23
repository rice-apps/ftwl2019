import React from 'react';
import { Box } from 'rebass';
import './BigText.css';

function BigText(props) {
  return (
    <Box className="body-container" width={props.width} ml="auto" mr="auto">
      <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet"></link>
      <div className="body">{props.body}</div>
    </Box>
  );
}

export default BigText;
