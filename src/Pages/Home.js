import React from 'react';
import './Home.css';

import Header from '../Components/header/header';
import Hero from '../Components/hero/hero';
import Homepage from '../Components/homepage/homepage';
import Endbar from '../Components/endbar/endbar'

function Home () {
  return (
    <>
    <Header/>
    <Hero/>
    <Homepage/>
    <Endbar/>
    </>
  );
}

export default Home;
