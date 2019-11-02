import React, { useState } from 'react';
import './TextImage.css';
import { Box, Flex, Image } from 'rebass';

function TextImage(props) {
  return (
    <div className="TextImage">
      <Flex>
        <Box>
          <p>
            <div className="title">
              <b>{props.title}</b>
            </div>
          </p>
          <div className="body">
            <p>{props.text}</p>
          </div>
        </Box>
        <img src={props.image} />
      </Flex>
    </div>
  );
}
export default TextImage;
