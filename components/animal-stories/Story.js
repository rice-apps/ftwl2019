import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from 'rebass';
import client from '../../client';

function Story() {

    // Declare the use of StorySection as a state object
    const [StorySection, setStorySection] = useState([]);

    // Use effect with (func, empty array) means that func gets called when this
    // component is rendered.
    useEffect(() => {

        // // Use client object to retrieve an entry
        client.getEntries({
            'content_type': 'sectionImageRight'
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
                setStorySection(entries.items);
            })

        // // Use client object to retrieve an entry
        // client.getEntry('2XgFSQ5SEmUVz6JLeUTQOw')
        // .then(function (entry) {
        //     console.log(entry.fields.questions);
        //     setFAQ(entry.fields.questions);
        // });
    }, [])

    console.log(StorySection);

    return (
        <div className="Story">
            {
                StorySection.map(
                    // Map an array using (a, b, c) => {} where:
                    // a is element
                    // b is element's index in the array
                    // c is the entire array
                    (section, index, arr) => {
                        return (
                            <Flex key={index}>
                                <Box width={1 / 5}></Box>
                                <Box width={3 / 20}>
                                    <p><b>{section.fields.heading}</b></p>
                                </Box>
                                <Box width={1 / 20}></Box>
                                <Box width={2 / 5}>
                                    <pre>{section.fields.textImage}</pre>
                                </Box>
                                <Box width={1 / 5}></Box>

                            </Flex>);
                    }
                )
            }
        </div>
    );
}

export default Story;