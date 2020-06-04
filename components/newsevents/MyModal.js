import React, {useState, useEffect} from "react";
import ImageText from '../util/ImageText';
import { Flex,Button,Box, Image } from 'rebass';
import './MyModal.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../../client.js';

function MyModal(props) {
  const [myModalDisplay, setMyModalDisplay] = useState("none");

  useEffect(() => {
    client.getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    })
    .then( function (response) {
      // console.log(response);
    })
  },[])

  
  return (
    <div>
      <Box>
          <Button width={1} 
          id="myBtn" 
          onClick={() => {
            setMyModalDisplay("block"); 
            history.pushState({}, '', props.title);
            }}>
              <ImageText title={props.title} image={props.image} date={props.date}/>
            </Button>
            <div id="myModal" className="modal" style={{display: myModalDisplay}}>
              <div className="modal-content">
                <span className="close" onClick={() => {
                    setMyModalDisplay("none");
                    history.pushState({}, '', 'events');
                    }}>&times;</span>
                <div className="modal-body">
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
