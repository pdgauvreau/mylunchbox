import React from 'react';
import Button from "@mui/material/Button";

import './hero.css';

function Hero (){
    return (
        <div  className ='all-container'>
        <div className='hero-container'>
            <div className='text-container'>
                <h1 className='title'>
                    Social Media for Food.
                </h1>
                <Button 
                variant='contained' 
                href='/' 
                sx={{
                    bgcolor:'rgba(35, 65, 47, 1)',
                    "&:hover":{bgcolor:'rgba(35, 65,47,0.9)'}
                }} 
                className='pack-button'
                >
                    Pack
                </Button>
            </div>  
        </div>
        </div>
    )
}

export default Hero;