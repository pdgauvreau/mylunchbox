import React from 'react';
import './hero.css';

function Hero (){
    return (
        <div className='hero-container'>
            <div className='text-container'>
                <h1 className='title'>
                    Pack Your lunch.box
                </h1>
                <button className='pack-button'>
                    Pack
                </button>
            </div>
        </div>
    )
}

export default Hero;