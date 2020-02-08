import React, { useState } from 'react';
import { Box, Flex, Image } from 'rebass';
import './TableText.css';
import FAQjson from './FAQ.json';

function TableText() {

    return (
        <div className="TableText">
            {
                FAQjson.faq.map(
                    q => {
                        return (
                        <Flex>
                            <Box width={1/5}></Box>
                            <Box width={3/20}>
                                <p><b>{q.sideQuestion}</b></p>
                            </Box>
                            <Box width={1/20}></Box>
                            <Box width={2/5}>
                                <p><b>{q.question}</b></p>
                                {q.answer.map(
                                    a => {return (
                                        <p>{a}</p>
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