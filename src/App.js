import React from "react";
import Hero from './components/Hero.js';
import Intro from './components/Intro.js';
import Text from './components/Text.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="App">
      <Hero/>
      <Intro/>
      <Text/>
      <Footer/>
    </div>
  );
}
