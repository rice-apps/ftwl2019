import React from 'react';
import './subtext.css';

function SubText(props) {
  return (
    <div className="subtext">
      <p>{props.text}</p>
    </div>
  );
}

export default SubText;
