import Navbar from '../components/util/Navbar';
import Footer from '../components/util/Footer';
import MainDeer from '../components/splashpage/MainDeer';
import NeedAssistance from '../components/splashpage/NeedAssistance';
import WaysToGive2 from '../components/splashpage/NeedAssistance';

function Home() {
  return (
    <div>
      <Navbar />
      <MainDeer />
      <NeedAssistance />
      <WaysToGive2 />
      <Footer />
    </div>
  );
}
export default Home;
