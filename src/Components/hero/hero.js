import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import './hero.css';

function Hero (){
    return (
        <Box 
        className='box'
        bgcolor={'fourth.main'}>
            <Container fixed maxWidth='lg' className ='all-container'>
                <Box className='hero-box'           
                display={'flex'}
                flexDirection={'row'}
                alignContent={'space-between'}>
                    <div className='page-text'> 
                        <Typography className='h1-text' variant='h1' color={'primary.main'}>LET<br/> GOOD FOOD<br/>FIND YOU.</Typography>
                        <Typography className='body1-text'variant='body1' color={'fifth.main'}>A perfect site for food lovers and wannabe Master Chef's. 
                            The best place to find, share, and create new food.</Typography>
                        <Button className='cooking-button' variant='contained' bgcolor={'secondary.main'}>Let's get cooking.</Button>
                    </div>
                    <div className='hero-container'/>
                </Box>
                
            </Container>
        </Box>
    )
}

export default Hero;