import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import './endbar.css'

function Endbar(){
    return (
        <Container maxWidth='xl'>
            <Box 
            width={'100%'}
            height={180}
            display={'flex'}
            align-items={'center'}
            sx={{
                bgcolor:'',
            }}>
                <Box 
                className='all-endbar'
                height={140}
                sx ={{
                        bgcolor:'primary.main',
                        borderRadius:'30px'
                }}>
                    <Box 
                    bgcolor='#primary.main' 
                    className='endbar-container'>
                        <Box className='logo-text'>
                            mylunch.box
                        </Box>
                        <Box className='endbar-text-area'>
                            <Button variant='text' href='/pack'>Pack</Button>
                            <Button variant='text' href='/'>Find</Button>
                            <Button variant='text' href='/'>Create</Button>
                            <Button variant='text' href='/profile'>Profile</Button>
                            <Button variant='text' href='/'>Home</Button>
                            <Button variant='text' href='/'>Sign up</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Endbar