import { Box, Heading, Flex, Text } from 'rebass';

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
        backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
        backgroundSize: 'cover',
        // borderRadius: 0,
        color: 'white',
        bg: 'gray',
      }}>
      <Box pt={150}></Box>
      <Box bg="white" opacity={0.5}>
        <Text
        opacity={2}
          pt={10}
          ml={20}
          //   fontFamily="monospace"
          fontSize={[4, 4]}
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
