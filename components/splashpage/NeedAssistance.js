import React, { Component } from 'react';
import BunnyPic from '../../static/home/NA_bunny.png';
import CallIcon from '../../static/home/call_icon.png';
import ClockBG from '../../static/home/Oval 2.png';
import ClockHand from '../../static/home/Line.png';
import Calendar from '../../static/home/calendar.png';
import Link from 'next/link'
import './NeedAssistance.css';

function NeedAssistance() {
  return (
    <div className="NAWrapper">
      <img id="randbunny" src={BunnyPic} />
      <div className="NATextWrapper">
        <div className="NAText">
          <div id="NATitle">Found an animal?</div>
          <div className="NAinfo">
            <img id="callIcon" src={CallIcon} />
            Call us at 281-259-0039.
          </div>
          <div className="NAinfo">
            <img id="clockBg" src={ClockBG} />
            <img id="clockHand" src={ClockHand} /> 10 AM to 2 PM{' '}
          </div>
          <div className="NAinfo">
            <img id="calendarIcon" src={Calendar} />
            Monday through Saturday
          </div>
          <div id="NAparagraph">
            <p>
              For assistance after hours, please utilize the resources on this website.
              Unfortunately, as a volunteer organization, we are unable to provide 24-hour
              assistance.
              <br />
              <br />
              Please call ahead before bringing animals to our center so that we are ready to assist
              you!
            </p>
          </div>
          <Link href="foundanimal">
            <div id="WildlifeHelpBox">WILDLIFE HELP</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NeedAssistance;
