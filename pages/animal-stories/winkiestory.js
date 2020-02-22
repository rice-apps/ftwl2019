import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Title from '../../components/util/Title';
import Story from '../../components/animal-stories/Story';

function WinkieStory() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Animal Stories"></Title>
            <Story />
            <Footer></Footer>
        </div>
    );
}

export default WinkieStory;