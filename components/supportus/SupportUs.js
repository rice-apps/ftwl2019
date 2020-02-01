import React from 'react';
import './SupportUs.css';
import { text } from './SupportUs.json';
import SupportUsBox from './SupportUsBox.js';
import Title from '../util/Title';

function SupportUs(props) {
  return (
    <div classname="SupportUsBody">
      <Title title={'Support Us While Shopping'}></Title>
      {text.map(t => {
        return (
          <div>
            <SupportUsBox cardcolor={t.cardcolor} title={t.title} text={t.text} />
          </div>
        );
      })}
    </div>
  );
}

export default SupportUs;
