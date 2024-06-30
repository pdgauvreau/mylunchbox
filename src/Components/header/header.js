import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


import './header.css';

function Header(){

    return (
      <Box
      className='box'
      height={120}
      bgcolor='fourth.main'>
        <Card 
        className='header'
        sx ={{
          bgcolor:'primary.main',
          borderRadius:'30px'
        }}
        >
          <div className ='logo-container'>
            <h>mylunch.box</h>
          </div>
          <div className='pages-container'>
            <Button variant='text' href='/'  Elevation> Find</Button>
            <Button variant='text' href='/'  > Create</Button>
            <Button variant='text' href='/'  > Share</Button>
            <Button variant='text' href='/'  > Settings</Button>
            <Button variant='text' href='/' sx={{bgcolor:'rgba(35, 65, 47, 0.5)'}}> sign up</Button>
          </div>
        </Card>
        </Box>
    );
}

export default Header;