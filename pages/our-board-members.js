import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Title from '../components/util/Title.js';
import BoardMembers from '../components/boardmembers/BoardMembers.js';

function OurBoardMembers() {
  return (
    <div>
      <Navbar></Navbar>
      <BoardMembers></BoardMembers>
      <Footer></Footer>
    </div>
  );
}

export default OurBoardMembers;
