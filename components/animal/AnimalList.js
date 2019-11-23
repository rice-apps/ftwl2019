import { Box } from 'rebass';
import './AnimalList.css';

function AnimalList() {
  return (
    <div className="list">
      <div className="sublist">
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
      </div>
      <div className="sublist">
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
      </div>
      <div className="sublist">
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
        <Box p={5} fontSize={4} width={[1 / 4, 1 / 4, 1 / 4]} color="white" bg="green">
          Box
        </Box>
      </div>
    </div>
  );
}

export default AnimalList;
