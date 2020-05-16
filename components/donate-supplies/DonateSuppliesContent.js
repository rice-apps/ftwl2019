import React, {useState, useEffect}  from 'react';
import { Box, Flex } from 'rebass';
import SuppliesCollapsible from './SuppliesCollapsible.js';
import CollapsibleContent from './CollapsibleContent.json';



function DonateSuppliesContent() {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <Flex align="center">
                <Box width={1 / 5}></Box>
                <Box width={1 / 2}>
                    <p>
                        We are in need of many items to keep the animals happy and healthy. These are
                        just some of the items we use on a daily basis.
                 </p>
                    <p>
                        To donate items, visit <u>our rehab center</u> during our business hours or <u>contact us</u> to arrage a donation.
                 </p>
                </Box>
                <Box width={1 / 5}></Box>
            </Flex>
            <Flex align="center">
                <Box width={1 / 5}></Box>
                <SuppliesCollapsible supplies={CollapsibleContent}></SuppliesCollapsible>
                {/* <Collapsible open="true">
                    <Collapsible trigger="Animal Food (<)" triggerStyle={{ color: "green" }}>
                        <ul>
                            <li>Science Diet Feline Maintenance Light dry cat food</li>
                            <li>Dry cat or kitten chow</li>
                            <li>...</li>
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="Paper & Plastic Items (<)" triggerStyle={{ color: "green" }}>
                        <p>Paper towels</p>
                        <p>Facial tissues</p>
                        <p>...</p>
                    </Collapsible>
                    <Collapsible trigger="Cleaning Supplies (<)" triggerStyle={{ color: "green" }}>
                        <p>Liquid bleach</p>
                        <p>Laundry detergent</p>
                        <p>...</p>
                    </Collapsible>
                </Collapsible> */}
                <Box width={1 / 5}></Box>
            </Flex>
        </div>
    );
}
export default DonateSuppliesContent;