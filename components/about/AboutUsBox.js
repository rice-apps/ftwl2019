import React from 'react';
import { Box } from 'rebass';

function AboutUsBox(props) {
  return (
    <Box
      width="340px"
      height="340px"
      // bg="lightgrey"
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '26px',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}>
        {props.heading}
      </h1>
      <h2
        style={{
          fontWeight: 'normal',
          fontSize: '14px',
        }}>
        {props.description}
      </h2>
    </Box>
  );
}

export default AboutUsBox;
