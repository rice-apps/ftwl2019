import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Title from '../components/util/Title.js'
import DonateContent from '../components/donate/DonateContent.js'
import MemberContent from '../components/donate/MemberContent.js'

function Donate() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Donate"></Title>
            <DonateContent></DonateContent>
            <Title title="Become a Member"></Title>
            <MemberContent></MemberContent>
            <Footer></Footer>
        </div>
    );
}

export default Donate;