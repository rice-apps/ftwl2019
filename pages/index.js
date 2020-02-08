import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Sponsors from '../components/splashpage/Sponsors';
import MainDeer from '../components/splashpage/MainDeer';
import NeedAssistance from '../components/splashpage/NeedAssistance';
import WaysToGive2 from '../components/splashpage/WaysToGive2';
import Link from 'next/link';
import client from '../client';

function Home() {

  client.getEntry('2XgFSQ5SEmUVz6JLeUTQOw')
  .then(function (entry) {
    // logs the entry metadata
    // console.log(entry.sys);

    // logs the field with ID title
    console.log(entry.fields.questions);
  })

  return (
    <div>
      <Navbar />
      <MainDeer />
      <NeedAssistance />
      <WaysToGive2 />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
