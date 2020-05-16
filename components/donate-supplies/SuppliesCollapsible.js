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

return (
    <div>
        {
        
            DS.map(
                
                (q,i) => { 
                    return (
                        
                    <Flex className="SupplyList">
                        <Collapsible open="true" 
                        
                        trigger={
                        <Box pl="15px" py="3px" width="800px" height="25px"  bg= { i % 2 === 0 ? "#6C8C34" : "#2F4C19"}  color="white"> 
                        {q.fields.category} 
                        <i class="down" style={{float: "right", marginRight: "8px", marginTop: "3px"}}> </i> 
                        </Box>}

                        triggerWhenOpen={
                            <Box pl="15px" py="3px" width="800px" height="25px"  bg= { i % 2 === 0 ? "#6C8C34" : "#2F4C19"}  color="white"> 
                            {q.fields.category} 
                            <i class="up" style={{float: "right", marginRight: "8px", marginTop: "7px"}}> </i> 
                            </Box>
                        }
                        > 

                
                        <Box >
                            {q.fields.supplyList.split(('\n')).map(
                                a => {return(
                                        <div className="Subcategory">
                                        {a}
                                        </div>
                                )}
                            )}
                        </Box>
                        </Collapsible>
                    </Flex>
                    )

                
                }
            )
        }
    </div>
)


}

export default SuppliesCollapsible;
