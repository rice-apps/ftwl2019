import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Navbar />
      <div>Welcome to Friends of Texas Wildlife 🐻</div>
      <Link href='/help'>
        <a>How to Help</a>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
