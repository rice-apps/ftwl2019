import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimalTopRow from '../components/animal/AnimalTopRow';
import AnimalList from '../components/animal/AnimalList';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <AnimalTopRow></AnimalTopRow>
      <AnimalList></AnimalList>
      <Footer></Footer>
    </div>
  );
}

export default Home;
