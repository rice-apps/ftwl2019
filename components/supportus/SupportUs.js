import React from 'react';
import './SupportUs.css';
import { text } from './SupportUs.json';
import SupportUsBox from './SupportUsBox.js';
import Arrow from '../../static/AffProgramsIcon.png';
import Title from '../util/Title';

function SupportUs(props) {
  return (
    <div>
      <Title title={'Support Us While Shopping'}></Title>
      {text.map(t => {
        return (
          <div>
            <SupportUsBox cardcolor={'green'} title={t.title} text={t.text} />
            <img className="AffIcon" src={Arrow} />
          </div>
        );
      })}
    </div>
  );
}

export default SupportUs;
