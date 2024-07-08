import React from 'react';
import './Home.css';

import Header from '../Components/header/header';
import Hero from '../Components/hero/hero';
import Homepage from '../Components/homepage/homepage';
import Endbar from '../Components/endbar/endbar'
import Section from '../Components/homeSection/section'
import Container from '@mui/material/Container';

function Home () {
  return (
    <>
    <Header/>
    <Hero/>
    <Section/>
    <Endbar/>
    </>
  );
}

export default Home;
