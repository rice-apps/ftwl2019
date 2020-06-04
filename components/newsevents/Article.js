import { useRouter } from 'next/router';
import {client} from '../../client.js';
import React, {useState, useEffect} from "react";
import MyModal from './MyModal.js';


function ArticleBody() {
  
  const router = useRouter()
  const { title } = router.query
  console.log("title", title)

  const [events, setEvent] = useState([]);

  useEffect(() => {
    client.getEntries({
      links_to_entry: '6230e7e84ad1RzTUayOhBj'
    })
    .then(function (response) {
      console.log(response);
      setEvent(response.items);
    })
  },[])
  
  console.log(events)

  let flag = 0;
  let event = {fields:{announcementTitle:"This event does not exist", announcementImage:{}, announcementBody1:{}}};
  for (let i=0; i<events.length; i++)
  {
    if (title === events[i].fields.announcementTitle)
    {
      event = events[i];
      flag = 1;
      break;
    }
  }


  return (
    <div>
        {
          flag == 1 &&
          <MyModal title={event.fields.announcementTitle} 
            image={event.fields.announcementImage.fields.file.url} 
            announcementBody={event.fields.announcementBody1}/>
        }
          {/* {event.fields.announcementImage.fields.file.url} */}
    </div>
  );
  
}

export default ArticleBody;