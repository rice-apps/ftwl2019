import { Box, Image, Flex } from 'rebass';
import Link from 'next/link';
import Title from '../util/Title';
import './Sponsors.css';
import sponsors from './sponsors.json';

function Logo(props) {
  return (
    <Image
      src={props.src}
      sx={{
        height: [70],
        margin: 3,
      }}
    />
  );
}

function Logos(props) {
  return (
    <div className="logos-container">
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="center">
        {sponsors.sponsors.map((src, i) => {
          return (
          <a target="_blank" key={i} href={src.link}>
            <Logo src={src.img} key={i}/>
          </a>
          )
        })}
      </Flex>
    </div>
  );
}

function Sponsors(props) {

  return (
    <div>
      <Title title="Partners and Sponsors" />
      <Logos/>
    </div>
  );
}


export default Sponsors;
