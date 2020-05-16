import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Title from '../components/util/Title.js'
import NewsAndEvents from '../components/newsevents/NewsAndEvents.js';


function Events() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="News and Events"></Title>
            <NewsAndEvents />
            <Footer></Footer>
        </div>
    );
}

export default Events;