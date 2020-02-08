import React from 'react';
import { Card } from 'rebass';
import './SupportUsBox.css';
import Arrow from '../../static/AffProgramsIcon.png';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

('Current Issues: Need to move the arrow to the far right. Figure out font sizes. Figure out how to vary text color');
('Since right now it just says color. Learn to vary border color. ');
function SupportUsBox(props) {
  return (
    <div className="Cards">
      <Card width={1000} height={125} bg={props.cardcolor} color={props.color}>
        <h1 className="Title">{props.title}</h1>
        <h1 className="Subtitle">{props.text}</h1>
        <img className="AffIcon" src={Arrow} />
      </Card>
    </div>
  );
}

export default SupportUsBox;
