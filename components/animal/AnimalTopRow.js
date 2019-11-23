import { Image } from 'rebass';
import './AnimalTopRow.css';

function AnimalTopRow() {
  return (
    <div className="toprow">
      <Image
        src={'../static/animals/Rabbits.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['23%'],
        }}></Image>
      <Image
        src={'../static/animals/Birds.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['23%'],
        }}></Image>
      <Image
        src={'../static/animals/Squirrels.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['23%'],
        }}></Image>
      <Image
        src={'../static/animals/Fawns.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['23%'],
        }}></Image>
    </div>
  );
}

export default AnimalTopRow;
