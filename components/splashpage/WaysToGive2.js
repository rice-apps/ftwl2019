import React, { Component } from 'react';
import Hands from '../../static/home/hands.png';
import './WaysToGive2.css';
import Link from 'next/link'

function WaysToGive2() {
  return (
    <div className="W2G2Wrapper">
      <h1>Ways to Give</h1>
      
      <div id="W2G2OptionWrapper">
        <Link href="volunteer">
        <div className="W2G2Item">
          <div className="W2G2Icon">
            <img className="HandsIcon" src={Hands} />
          </div>
          <h2>Volunteer</h2>
          <p>
            Friends of Texas Wildlife relies totally on caring volunteers like yourself to help
            fulfill its mission.{' '}
          </p>
        </div>
        </Link>

        <Link href="donate">
        <div className="W2G2Item">
          <div className="W2G2Icon">
            <img className="HandsIcon" src={Hands} />
          </div>
          <h2>Donate</h2>
          <p>
            We are a non-profit organization. 100% of all donations directly support native Texas
            wildlife.
          </p>
        </div>
        </Link>

        <Link href="waystogive">
        <div className="W2G2Item">
          <div className="W2G2Icon">
            <img className="HandsIcon" src={Hands} />
          </div>
          <h2>More</h2>
          <p>
            Explore other ways you can make a difference by supporting the Friends of Texas
            Wildlife.{' '}
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default WaysToGive2;
