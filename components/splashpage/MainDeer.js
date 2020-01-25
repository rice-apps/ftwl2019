import React from 'react';
import './MainDeer.css';

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
          <div id="learnBox">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
}

export default MainDeer;
