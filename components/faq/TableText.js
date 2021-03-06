import React, { useState, useEffect } from 'react';
import { Box, Flex, Image } from 'rebass';
import './TableText.css';
import { client } from '../../client';

function TableText() {
  // Declare the use of FAQ as a state object
  const [FAQ, setFAQ] = useState([]);

  // Use effect with (func, empty array) means that func gets called when this
  // component is rendered.
  useEffect(() => {
    // // Use client object to retrieve an entry
    client
      .getEntries({
        content_type: 'singleQa',
      })
      .then(function (entries) {
        // Sort entries by date
        // entries.items.sort((a, b) => {
        //     console.log(Date.parse(a.sys.createdAt));
        //     return Date.parse(a.sys.createdAt) < Date.parse(b.sys.createdAt);
        // })

        // Reverse items
        entries.items.reverse();

        // Set state FAQ variable
        setFAQ(entries.items);
      });

    // // Use client object to retrieve an entry
    // client.getEntry('2XgFSQ5SEmUVz6JLeUTQOw')
    // .then(function (entry) {
    //     console.log(entry.fields.questions);
    //     setFAQ(entry.fields.questions);
    // });
  }, []);

  return (
    <div className="TableText">
      {FAQ.map(
        // Map an array using (a, b, c) => {} where:
        // a is element
        // b is element's index in the array
        // c is the entire array
        (q, idx1, arr) => {
          return (
            <div className="Questions">
              <p>
                <b>{q.fields.topic}</b>
              </p>
              <p>
                <b>{q.fields.question}</b>
              </p>
              {/* Split by \n separates the string
                                    into a list of strings separated by
                                    the paragraphs. */}
              {q.fields.answer.split('\n').map((a, idx2) => {
                return (
                  <p style={{ marginTop: 3, marginBottom: 3 }} key={idx2}>
                    {a}
                  </p>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
}

export default TableText;
