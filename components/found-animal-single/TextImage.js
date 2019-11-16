import React, { useState } from 'react';
import './TextImage.css';
import { Box, Flex, Image } from 'rebass';

function TextImage(props) {
  return (
    <div className="TextImage">
      <Flex>
        <Box>
          <p>
            <div className="header">
              <b>{props.title}</b>
            </div>
          </p>
          <div className="body">
            {props.text.map(t => {
              return <p>{t}</p>;
            })}
          </div>
        </Box>
        <Box>
        {
        props.image.map(t => {
          return <img src={t} />;
        })
        }
        </Box>
      </Flex>
    </div>
  );
}
export default TextImage;
