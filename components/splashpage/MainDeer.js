import React from 'react';
import './MainDeer.css';
import Link from 'next/link'

function MainDeer() {
  return (
    <div className="DHDCopyWrapper">
      <div className="MenuPlaceholder"></div>
      <style jsx>
        {`
        #DHDMain {
        height: 88vh;
        width: 100vw;
        background-image: url('../../static/home/deer.png');
        background-size: 100vw 88vh;
        color: white;
      `}
      </style>
      <div id="DHDMain">
        <div id="DHDTextWrapper">
          <h1>Friends of Texas Wildlife</h1>
          <h2>Giving wildlife a second chance.</h2>
          <Link href="/aboutus">
            <div id="learnBox" onClick>LEARN MORE</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainDeer;
