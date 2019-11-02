import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainDeer from '../components/MainDeer';
import NeedAssistance from '../components/NeedAssistance';

function Home() {
    return (
        <div>
            <Navbar/>
            <MainDeer/>
            <NeedAssistance/>
            <Footer/>
        </div>
    )
}
export default Home;