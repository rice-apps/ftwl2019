import React from 'react';
import { Box, Flex, Image, Card } from 'rebass';
import './Card.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function ColoredCard(props) {
  return (
    <div style={{padding: "20px"}}>
      <Box
        className="Card"
        width={props.cardwidth == '' ? 'auto' : props.cardwidth}
        height={props.cardheight == '' ? 'auto' : props.cardheight}
        bg={props.cardcolor}>
        <h1 style={{ letterSpacing: props.letterspacing1, fontSize: props.lettersize1}}>{props.line1text}</h1>
        <h1 style={{ letterSpacing: props.letterspacing2, fontSize: props.lettersize2}}>{props.line2text}</h1>
      </Box>
    </div>
  );
}

export default ColoredCard;
