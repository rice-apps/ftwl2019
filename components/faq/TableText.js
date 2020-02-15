import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from 'rebass';
import './TableText.css';
import FAQjson from './FAQ.json';
import client from '../../client';

function TableText() {

    // Declare the use of FAQ as a state object
    const [FAQ, setFAQ] = useState([]);

    // Use effect with (func, empty array) means that func gets called when this
    // component is rendered.
    useEffect(() => {
        // Use client object to retrieve an entry
        client.getEntry('2XgFSQ5SEmUVz6JLeUTQOw')
        .then(function (entry) {
            console.log(entry.fields.questions);
            setFAQ(entry.fields.questions);
        });
    }, [])

    return (
        <div className="TableText">
             {
                FAQ.map(
                    (q, idx1, arr) => {
                        console.log(q.fields);
                        return (
                        <Flex key={idx1}>
                            <Box width={1/5}></Box>
                            <Box width={3/20}>
                                <p><b>{q.fields.topic}</b></p>
                            </Box>
                            <Box width={1/20}></Box>
                            <Box width={2/5}>
                                <p><b>{q.fields.question}</b></p>
                                
                                {/* Split by \n separates the string
                                    into a list of strings separated by
                                    the paragraphs. */}
                                {q.fields.answer.split('\n').map(
                                    (a, idx2) => {return (
                                        <p key={idx2}>{a}</p>
                                    );
                                    }
                                )}

                            </Box>
                            <Box width = {1/5}></Box>

                        </Flex>);
                    }
                )
             }
        </div>
    );
}

export default TableText;