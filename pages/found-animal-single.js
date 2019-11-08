import React from 'react';
import TextImage from '../components/found-animal-single/TextImage.js';
import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Animal from '../components/found-animal-single/Animal.js';

function FoundAnimal() {
  return (
    <div className="found-animal">
      <Navbar />
      <Animal />
      <Footer />
    </div>
  );
}

export default FoundAnimal;
