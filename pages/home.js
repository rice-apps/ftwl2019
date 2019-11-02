import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainDeer from '../components/MainDeer';
import NeedAssistance from '../components/NeedAssistance';
import WaysToGive2 from '../components/WaysToGive2';

function Home() {
    return (
        <div>
            <Navbar/>
            <MainDeer/>
            <NeedAssistance/>
            <WaysToGive2/>
            <Footer/>
        </div>
    )
}
export default Home;