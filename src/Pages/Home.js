import React from 'react';
import './Home.css';

import Header from '../Components/header/header';
import Hero from '../Components/hero/hero';
import PagesInfo from '../Components/pagesInfo/pages'
import Endbar from '../Components/endbar/endbar'

function Home () {
  return (
    <>
    <Header/>
    <Hero/>
    <PagesInfo/>
    <Endbar/>
    </>
  );
}

export default Home;
