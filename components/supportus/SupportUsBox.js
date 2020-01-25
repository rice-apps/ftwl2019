import React from 'react';
import { Box, Flex, Image, Card } from 'rebass';
import './SupportUsBox.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function SupportUsBox(props) {
  return (
    <div>
      <Card className="Box" width={1000} height={150} bg={props.cardcolor}>
        <h1>{props.title}</h1>
        <h1>{props.text}</h1>
      </Card>
    </div>
  );
}

export default SupportUsBox;
