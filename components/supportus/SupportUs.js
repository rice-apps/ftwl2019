import React from 'react';
import './SupportUs.css';
import Arrow from '../../static/AffProgramsIcon.png';
import Title from '../util/Title';

function SupportUs() {
  return (
    <div className="AffProgramsWrapper">
      <Title title={'Support Us While Shopping'}></Title>
      <div id="AffProgramsWrapper">
        <div className="AffProgramsItem">
          <div className="AffProgramsTextWrapper">
            <div className="title">{props.title}</div>
            <p className="subtitle">{props.subtitle}</p>
          </div>
          <img className="AffIcon" src={Arrow} />
        </div>
      </div>
    </div>
  );
}

export default SupportUs;
