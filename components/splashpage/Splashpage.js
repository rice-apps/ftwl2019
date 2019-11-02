import Navbar from '../Navbar';
import Footer from '../Footer';
import Link from 'next/link';

function Splashpage() {
  return (
    <div>
      <Navbar />
      <div>Welcome to Friends of Texas Wildlife 🐻</div>
      <Link href="/help">
        <a>How to Help</a>
      </Link>
      <Footer />
    </div>
  );
}

export default Splashpage;
