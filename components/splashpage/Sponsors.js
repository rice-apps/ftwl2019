import { Box, Image, Flex } from 'rebass';
import Link from 'next/link';
import Title from '../Title';
import './Sponsors.css';

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
        {props.sponsors.urls.map(src => (
          <Logo src={src} />
        ))}
      </Flex>
    </div>
  );
}

function Sponsors(props) {
  return (
    <div>
      <Title title="Partners and Sponsors" />
      <Logos sponsors={imgs} />
    </div>
  );
}

let imgs = {
  urls: [
    '../../static/sponsors/walmart 1.png',
    '../../static/sponsors/kroger 1.png',
    '../../static/sponsors/texas forest service 1.png',
    '../../static/sponsors/c_e_ sheperd 1.png',
    '../../static/sponsors/911 Wildlife Logo 1.png',
    '../../static/sponsors/cunningham living(1) 1.png',
    '../../static/sponsors/wildlife center of texas 1.png',
    '../../static/sponsors/pets paw logo(1) 1.png',
    '../../static/sponsors/bay area wildlife logo-page-001 1.png',
    '../../static/sponsors/spring creek greenway 1.png',
    '../../static/sponsors/dove key ranch(1) 1.png',
    '../../static/sponsors/fox valley 1.png',
  ],
};

export default Sponsors;
