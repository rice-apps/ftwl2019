import React from 'react';
import { Box, Flex, Image, Card} from 'rebass';
import './Card.css';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function ColoredCard(props) {
    return(
        <div>
            <Card className="Card"  width={(props.cardwidth == "") ? "auto" : props.cardwidth} bg={props.cardcolor}>
                <h1 style= {{letterSpacing: props.letterspacing}} >
                    {props.line1text}
                </h1>
                <h1>
                    {props.line2text}
                </h1>
            </Card>
        </div>
    )




}

export default ColoredCard;