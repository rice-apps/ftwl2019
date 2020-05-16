import React, {useState, useEffect} from "react";
import ImageText from '../util/ImageText';
import { Flex,Button,Box, Image } from 'rebass';
import './MyModal.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



import client from '../../client.js';


function MyModal(props) {
  // return <ImageText title="April Fundraiser" date="Thursday, April 12, 2019" preview="hello this is really a short preview of our blog post." />;
  const [myModalDisplay, setMyModalDisplay] = useState("none");

  useEffect(() => {
    client.getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    })
    .then( function (response) {
      console.log(response);
    })
  },[])
  

  return (
    <div>
      <Box>
          <Button width={1} id="myBtn" onClick={() => {
              setMyModalDisplay("block"); 
              history.pushState({}, '', props.title);
              }}>
                  <ImageText title={props.title} image={props.image}/></Button>
            <div id="myModal" class="modal" style={{display: myModalDisplay}}>
              <div class="modal-content">
                <span class="close" onClick={() => {
                    setMyModalDisplay("none");
                    history.pushState({}, '', 'events');
                    }}>&times;</span>
                <div>
                    <Image src={props.image} sx={{width:['50%','50%']}}></Image>
                    {documentToReactComponents(props.announcementBody)}
                </div>
              </div>
            </div>

        </Box>
    </div>
  );
  
}

export default MyModal;
