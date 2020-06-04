import Title from '../util/Title';
import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import { Flex,Button,Box, Image } from 'rebass';
import './NewsAndEvents.css';
import MyModal from './MyModal.js';
import {client} from '../../client.js';


function NewsAndEventsBody() {
  const [event, setEvent] = useState([]);

  const [myModalDisplay, setMyModalDisplay] = useState("none");

  useEffect(() => {
    client.getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    })
    .then( function (response) {
      console.log(response);
      setEvent(response.items);
    })
  },[])

  console.log(event);
  

  return (
    <div>
      {event.map((x, i) => {
        //  // When the user clicks anywhere outside of the modal, close it
        //  window.onclick = function(event) {
        //    if (event.target == modal) {
        //     document.getElementById("myModal").style.display = "none";
        //    }
        //  }
        return (
        <MyModal title={x.fields.announcementTitle}
          key={i} 
          date={x.sys.updatedAt}
          image={x.fields.announcementImage.fields.file.url}
          announcementBody={x.fields.announcementBody1}/>
      );
      })}
    </div>
  );
  
}

export default NewsAndEventsBody;
