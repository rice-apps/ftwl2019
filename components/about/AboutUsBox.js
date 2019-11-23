import React from 'react';
import { Box } from 'rebass';
import LearnMoreButton from '../util/LearnMoreButton';

function AboutUsBox(props) {
  return (
    <Box
      width="340px"
      height="340px"
      bg={props.color}
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        justifyItems: 'center',
        justifyContent: 'center',
      }}>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '26px',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}>
        {props.heading}
      </h1>
      <h2
        style={{
          fontWeight: 'normal',
          fontSize: '14px',
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "12px",
        }}>
        {props.description}
      </h2>
      <div>
        {props.learnMore ? <LearnMoreButton></LearnMoreButton>: null}
        {/* ternary operator, ? checks to see if learnMore is null,
        first part of colon tells you what to do when it is not null, second
        part tells you what to do when it is null */}
      </div>
    </Box>
  );
}

export default AboutUsBox;
