import Title from '../util/Title';
import ImageText from '../util/ImageText';
import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import { Flex,Button,Box, Image } from 'rebass';
import './NewsAndEvents.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



import client from '../../client.js';

function NewsAndEventsBody() {
  // return <ImageText title="April Fundraiser" date="Thursday, April 12, 2019" preview="hello this is really a short preview of our blog post." />;
  const [event, setEvent] = useState([]);

  useEffect(() => {
    client.getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    })
    .then( function (response) {
      console.log(response);
      setEvent(response.items);
    })
  },[])
  
  console.log(event)

  return (
    <div>
      {event.map(x => {
        console.log(x.fields.announcementTitle);
        return (
        <Box>
          <Popup trigger={<Button width={1}><ImageText title={x.fields.announcementTitle} image={x.fields.announcementImage.fields.file.url}/></Button>} 
          modal
          closeOnDocumentClick position="center">
          <div>
          <Image src={x.fields.announcementImage.fields.file.url} sx={{width:['50%','50%']}}></Image>
          {documentToReactComponents(x.fields.announcementBody1)}</div>
          </Popup>
        </Box>
      );
      })}
    </div>
  );
  
}

export default NewsAndEventsBody;
