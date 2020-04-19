import React from 'react';

function ImageWithCaption(props) {
  return (
    <div className="ImageWithCaption">
        {props.caption}
        <img src={props.image}/>
    </div>
  );
}
export default ImageWithCaption;
