import React from 'react';
import TextImage from './TextImage.js';
import ImageWithCaption from './ImageWithCaption.js';
import ColoredCard from '../util/ColoredCard';

function FoundAnimal(props) {
  var background = props.animal.text.shift();
  return (
    <div style={{width:"60%", margin:"auto"}}>

      <TextImage title={background.title} text={background.text}/>

      <div style={{display: "flex", flexDirection: "row"}}>

        <div style={{display: "flex", flexDirection: "column"}}>

          {props.animal.text.map((t, i, arr) => {
            return <TextImage key={i} title={t.title} text={t.text} image={t.image}/>;
          })}

          <ColoredCard 
          line1text="Call Us" 
          line2text="281-259-0039" 
          cardwidth={300}
          cardheight={100}
          cardcolor="#EE9C3B"/>

        </div>
        
        { props.animal.images &&
        <div style={{display: "flex", flexDirection: "column", paddingLeft: 20}}>
          {props.animal.images.map((t, i, arr) => {
            return <ImageWithCaption key={i} caption={t.caption} image={t.image}/>;
          })}
        </div>
        }

      </div>
    </div>
  );
}

export default FoundAnimal;
