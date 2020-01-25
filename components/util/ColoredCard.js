import React from 'react';
import { Box, Flex, Image, Card } from 'rebass';
import './Card.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function ColoredCard(props) {
  return (
    <div>
      <Box
        className="Card"
        width={props.cardwidth == '' ? 'auto' : props.cardwidth}
        bg={props.cardcolor}>
        <h1 style={{ letterSpacing: props.letterspacing, fontSize: props.lettersize }}>
          {props.line1text}
        </h1>
        <h1 className="line2">{props.line2text}</h1>
      </Box>
    </div>
  );
}

export default ColoredCard;
