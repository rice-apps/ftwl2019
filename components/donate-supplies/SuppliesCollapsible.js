import React, { useState, useEffect }  from 'react';
import Collapsible from 'react-collapsible';
import client from '../../client';
import { Box, Flex } from 'rebass';
import "./DonateSuppliesContent.css";

function SuppliesCollapsible(props) {

    const [DS, setDS] = useState([]);

    useEffect(() => {
        client.getEntries({
            'content_type': 'donateSupplyCategory'
        })
        .then(function (entries) {
            entries.items.reverse();
            setDS(entries.items);

        })

    }, [])


    // return (
    //     <div>
    //         {props.supplies.sections.map(section => {
    //             return <Collapsible trigger={section.title}>
    //                 {section.rows}
    //             </Collapsible>
    //         }
    //         )}
    //     </div>


    return (
        <div>
            {
                DS.map(
                    q => {
                        return (
                        <Flex className="SupplyList">
                            <Box width="750px" bg="green"> {q.fields.category} </Box>
                            {q.fields.supplyList.split(('\n')).map(
                                a => {return(
                                    <Box align="center" width={2/3}>
                                        {a}
                                    </Box>)
                                }
                            )
                            }
                        </Flex>
                        )
                    }


                )
            }
            
        </div>
    )
    
}
export default SuppliesCollapsible;
