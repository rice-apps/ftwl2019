import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Title from '../components/util/Title.js'
import Animal from '../components/found-animal-single/Animal.js'
import Community from '../components/community-outreach-info/community.json'

function EducationAndOutreach() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Education and Community Outreach"></Title>
            <Animal animal={Community}/>
            <Footer></Footer>
        </div>
    );
}

export default EducationAndOutreach;