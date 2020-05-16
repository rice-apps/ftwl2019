import { Image, Flex } from 'rebass';
import './AnimalTopRow.css';

function AnimalTopRow() {
  return (
    <div className="toprow">
      <Flex flexWrap="wrap" flexDirection="row" justifyContent="center">
        <Image
          src={'../static/animals/Rabbits.png'}
          sx={{
            height: [200],
            margin: 3,
          }}></Image>
        <Image
          src={'../static/animals/Birds.png'}
          sx={{
            height: [200],
            margin: 3,
          }}></Image>
        <Image
          src={'../static/animals/Squirrels.png'}
          sx={{
            height: [200],
            margin: 3,
          }}></Image>
        <Image
          src={'../static/animals/Fawns.png'}
          sx={{
            height: [200],
            margin: 3,
          }}></Image>
      </Flex>
    </div>
  );
}

export default AnimalTopRow;
