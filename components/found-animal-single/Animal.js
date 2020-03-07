import React from 'react';
import TextImage from './TextImage.js';

function FoundAnimal(props) {
  return (
    // <div className="found-animal">
    <div style={{width:"80%", margin:"auto"}}>
      {props.animal.text.map(t => {
        return <TextImage title={t.title} text={t.text} image={t.image} />;
      })}
    </div>
  );
}

export default FoundAnimal;
