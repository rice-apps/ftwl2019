import React from 'react';
import TextImage from './TextImage.js';
import CallUsBox from '../util/CallUsBox.js';

function FoundAnimal(props) {
  return (
    <div className="found-animal">
      {props.animal.text.map(t => {
        return <TextImage title={t.title} text={t.text} image={t.image} />;
      })}
      <CallUsBox></CallUsBox>
    </div>
  );
}

export default FoundAnimal;
