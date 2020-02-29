import Title from '../util/Title';
import ImageText from '../util/ImageText';
import React, {useState, useEffect} from "react";

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
      response.items.reverse();
      setEvent(response.items);
    })
  },[])
  
  console.log(event)

  return (
    <div>
      {event.map(x => {
        console.log(x.fields.announcementTitle);
        return <ImageText title={x.fields.announcementTitle} />
      })}
    </div>
  );
  
}

export default NewsAndEventsBody;
