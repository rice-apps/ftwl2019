import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsors from '../components/splashpage/Sponsors'
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Navbar />
      <div>Welcome to Friends of Texas Wildlife 🐻</div>
      <Link href='/help'>
        <a>How to Help</a>
      </Link>
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
