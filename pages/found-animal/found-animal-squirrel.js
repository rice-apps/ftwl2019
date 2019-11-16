import React from 'react';
import TextImage from '../components/found-animal-single/TextImage.js';
import Navbar from '../components/navbar/Navbar.js';
import Footer from '../components/footer/Footer.js';
import Animal from '../components/found-animal-single/Animal.js';
import Title from '../components/util/Title.js';
import Creature from '../components/found-animal-single/Squirrel.json';


function FoundAnimal() {
  return (
    <div className="found-animal">
      <Navbar />
      <Title title="Squirrels" />
      <Animal animal={Creature}/>
      <Footer />
    </div>
  );
}

export default FoundAnimal;
