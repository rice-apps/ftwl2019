import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Title from '../components/util/Title.js'
import DonateSuppliesContent from "../components/donate-supplies/DonateSuppliesContent.js"

function DonateSupplies() {
    return (
        <div>
            <Navbar></Navbar>
            <Title title="Donate Supplies"></Title>
            <DonateSuppliesContent></DonateSuppliesContent>
            <Footer></Footer>
        </div>
    );
}

export default DonateSupplies;