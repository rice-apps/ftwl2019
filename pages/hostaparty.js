import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Title from '../components/util/Title.js'
import PartyContent from '../components/party/PartyContent.js'

function HostParty() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Host a Party"></Title>
            <PartyContent></PartyContent>
            <Footer></Footer>
        </div>
    );
}

export default HostParty;