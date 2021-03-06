import { Box, Heading, Flex, Text, Button } from 'rebass';

// ImageText component has a background image with text at the bottom.
function ImageText(props) {
  return (
    <Box
      alignText="center"
      width={[1, 1, 1 / 2]}
      mx="auto"
      sx={{
        // // px: 200,
        // // py: 200,
        // // width: [1, 1, 1],
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover', 
        // borderRadius: 0,
        color: 'white',
        bg: 'gray',
      }}>
      <Box pt={200}></Box>
      <Box bg="white" opacity={0.8} pt={40} style={{paddingBottom:20}}>
        <Text
        opacity={2}
          pt={10}
          ml={20}
          //   fontFamily="monospace"
          fontSize={[5, 5]}
          fontWeight="bold"
          lineHeight="body"
          color="black">
          {props.title}
        </Text>
        <Text
          ml={20}
          //   fontFamily="monospace"
          fontSize={[3, 2]}
          fontWeight="bold"
          lineHeight="body"
          color="black">
          {props.date}
        </Text>
        <Text
          ml={20}
          //   fontFamily="monospace"
          fontSize={[3, 1]}
          lineHeight="body"
          color="black">
          {props.preview}
        </Text>
      </Box>
      </Box>
  );
}

export default ImageText;
