import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Link from 'next/link';
import './Footer.css';
import { footer_info } from './Footer.json';
import { navbar_headers } from './Navbar-copy.json';

function Footer() {
  return (
    <div className="footer">
      <Flex className="footer-flex">
        {footer_info.map(({ title, text }) => (
          <Box className="footer-block">
            <div className="footer-header">{title}</div>
            <div className="footer-info">
              {text.split('\n').map(line => (
                <div>{line}</div>
              ))}
            </div>
          </Box>
        ))}
        <Flex className="footer-links">
          {navbar_headers.map(({ name, toString }) => (
            <Box className="footer-link">
              <p>{name}</p>
            </Box>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
//   return (
//     <div className="footer">
//       <link
//         href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
//         rel="stylesheet"></link>
//       <Flex>
//         <Box p={5} fontSize={2} width={[1 / 4, 1 / 4, 1 / 4]} color="white"></Box>
//         <Box
//           p={5}
//           fontSize={2}
//           width={[3 / 5, 3 / 5, 3 / 5]}
//           color="white"
//           padding="32px 30px 32px 0px">
//           <div className="footer-header">Friends of Texas Wildlife</div>
//           <div className="footer-info">
//             <p>
//               Friends of Texas Wildlife is a 501(c)(3) non-profit organization; 100% of all
//               donations support native Texas wildlife and are tax deductible to the extent permitted
//               by law.
//             </p>
//           </div>
//         </Box>

//         <Box
//           p={5}
//           fontSize={2}
//           width={[2 / 5, 2 / 5, 2 / 5]}
//           color="white"
//           padding="32px 0px 32px 0px">
//           <Link href="/contactus">
//             <div className="footer-header">Contact Us</div>
//           </Link>
//           <div className="footer-info">
//             <p>
//               Friends of Texas Wildlife<br></br>
//               29615 Highland Blvd<br></br>
//               Magnolia, TX 77354<br></br>
//               (281) 259-0039<br></br>
//               ftwl.center@gmail.com
//             </p>
//           </div>
//         </Box>

//         {/* Bottom tabs */}
//         <Box
//           p={5}
//           fontSize={2}
//           width={[1, 1, 1]}
//           color="white"
//           padding="32px 0px 32px 20px"
//           height="100px">
//           <Flex>
//             <Link href="/aboutus">
//               <Box
//                 p={5}
//                 fontSize="12px"
//                 width={[2 / 3, 2 / 3, 2 / 3]}
//                 color="white"
//                 padding="0px 10px 10px 10px">
//                 About Us
//               </Box>
//             </Link>
//             <Link href="/waystogive">
//               <Box
//                 p={5}
//                 fontSize="13px"
//                 width={[1, 1, 1]}
//                 color="white"
//                 padding="0px 10px 10px 10px">
//                 Ways to Give
//               </Box>
//             </Link>
//             <Link href="foundanimal">
//               <Box
//                 p={5}
//                 fontSize="12px"
//                 width={[2 / 3, 2 / 3, 2 / 3]}
//                 color="white"
//                 padding="0px 10px 10px 10px">
//                 Found an Animal
//               </Box>
//             </Link>

//             <Link href="news-and-events">
//               <Box
//                 p={5}
//                 fontSize="12px"
//                 width={[2 / 3, 2 / 3, 2 / 3]}
//                 color="white"
//                 padding="0px 10px 10px 10px">
//                 News &amp; Events
//               </Box>
//             </Link>

//             <a
//               href={'https://squareup.com/store/FTWL'}
//               target="_blank"
//               style={{ textDecoration: 'none' }}>
//               <Box
//                 p={5}
//                 fontSize="12px"
//                 width={[2 / 3, 2 / 3, 2 / 3]}
//                 color="white"
//                 padding="0px 10px 10px 10px">
//                 Store
//               </Box>
//             </a>
//           </Flex>
//           <Box>
//             <Flex alignContent="flex-end">
//               <div className="media-icons">
//                 <a
//                   href={'https://www.facebook.com/SavingTexasWildlife'}
//                   target="_blank"
//                   style={{ textDecoration: 'none' }}>
//                   <Image
//                     src={'../static/monotone-icons/facebook-icon.png'}
//                     sx={{
//                       width: ['30px', '30px'],
//                     }}
//                     padding="3px"
//                   />
//                 </a>

//                 <a
//                   href={'https://twitter.com/FriendsofTexas'}
//                   target="_blank"
//                   style={{ textDecoration: 'none' }}>
//                   <Image
//                     src={'../static/monotone-icons/twitter-icon.png'}
//                     sx={{
//                       width: ['30px', '30px'],
//                     }}
//                     padding="3px"
//                   />
//                 </a>
//               </div>
//             </Flex>
//           </Box>
//         </Box>
//         <Box p={5} fontSize={2} width={[1 / 4, 1 / 4, 1 / 4]} color="white"></Box>
//       </Flex>
//     </div>
//   );

export default Footer;
