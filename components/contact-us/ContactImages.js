import React from 'react';
import { Box, Flex, Image } from 'rebass';

function ContactImages() {
    return (
        <div>
            <Box>
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['250px', '250px'],
                    }}
                    padding="10px"
                />
            </Box>
            <Box>
                <Image
                    src={'../static/placeholder.png'}
                    sx={{
                        width: ['250px', '250px'],
                    }}
                    padding="10px"
                />
            </Box>
        </div>
    );
}

export default ContactImages;