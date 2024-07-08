import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from'@mui/material/Container';


import './header.css';

function Header(){

    return (
      <Container maxWidth='xl'>
        <Box
        className='box'
        height={20}>
          <Card 
            className='header'
            sx ={{
              bgcolor:'primary.main',
              borderRadius:'30px'
            }}
            >
              <div className ='logo-container'>
                <a className='logo' href='/'>mylunch.box</a>
              </div>
              <div className='pages-container'>
                <Button variant='text' href='/pack'  Elevation> Pack</Button>
                <Button variant='text' href='/'  > Find</Button>
                <Button variant='text' href='/'  > Create</Button>
                <Button variant='text' href='/profile'  > Profile</Button>
                <Button variant='text' href='/' className='sign-button' sx={{bgcolor:'tertiary.main', color:'primary.main'}}> sign up</Button>
              </div>
            </Card>
          </Box>
        </Container>
    );
}

export default Header;