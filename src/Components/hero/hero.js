import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import './hero.css';

function Hero (){
    return (
        <Container maxWidth='xl'>
        <Box 
        className='box'
        height={'650px'}>
            <Container  maxWidth='xl'  className ='all-container' sx={{ height:'100%'}}>
                <Box 
                className='hero-box'           
                display={'flex'}
                justifyContent={'space-between'}>
                    <div className='page-text'> 
                        <Typography className='h1-text' variant='h1' color={'primary.main'}>LET<br/> GOOD FOOD<br/>FIND YOU.</Typography>
                        <Typography className='body1-text'variant='body1' color={'fifth.main'}>A perfect site for food lovers and wannabe Master Chef's. 
                            <br/>The best place to find, share, and create new food.</Typography>
                        <Button className='cooking-button' variant='contained' bgcolor={'secondary.main'}>Let's get cooking.</Button>
                    </div>
                    <div className='hero-container'/>
                </Box>
                
            </Container>
        </Box>
        </Container>
    )
}

export default Hero;