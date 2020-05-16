import { Image, Link, Box } from 'rebass';
import './AnimalTopRow.css';

function AnimalTopRow() {
  return (
    <div className="toprow">
      <Link href="found-animal/bunny">
      <Box>
      <Image
        src={'../static/animals/Rabbits.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['100%'],
        }}></Image>
      </Box>
      </Link>

      <Link href="found-animal/bird">
      <Box>
      <Image
        src={'../static/animals/Birds.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['100%'],
        }}></Image>
      </Box>
      </Link>
      
      <Link href="found-animal/squirrel">
      <Box>
      <Image
        src={'../static/animals/Squirrels.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['100%'],
        }}></Image>
      </Box>
      </Link>

      <Link href="found-animal/fawn">
      <Box>
      <Image
        src={'../static/animals/Fawns.png'}
        pr={3}
        pl={3}
        sx={{
          size: ['100%'],
        }}></Image>
        </Box>
        </Link>
    </div>
  );
}

export default AnimalTopRow;
