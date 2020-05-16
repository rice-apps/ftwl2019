import React from 'react';
import { Box, Image } from 'rebass';

function AboutUsImageBox(props) {
  return (
    <Box
      width="340px"
      height="340px"
      bg="lightgrey"
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
            <Image
            src={"../../static/aboutus/" + props.img}
            />
    </Box>
  );
}

export default AboutUsImageBox;
