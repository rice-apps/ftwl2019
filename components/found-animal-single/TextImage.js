import React from 'react';
import './TextImage.css';

function TextImage(props) {
  return (
    <div className="TextImage">
        <div>
            <h2 className="texttitle">{props.title}</h2>
            {props.text.map(t => <p className="textbody">{t}</p>)}
        </div> 
    </div>
  );
}
export default TextImage;
