import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Header from '../../Components/header/header';
import './profile.css';

function Profile(){
    return(
        <>
        <Header/>
         <Container maxWidth='xl'>
            <Card elevation={24} sx={{width:'100%', height:'100%', bgcolor:'primary.main',borderRadius:'50px'}}>
                <Box >
                    <div className='profile-container'>
                        <div className='tile-1'>
                            <div className='pfp'/>
                            <Typography variant='h2'sx={{textShadow:'10px', color:'white', }}> Username </Typography>
                            <Typography variant='body1'sx={{color:'white',margin:'1rem'}}> avid lunch box user</Typography>
                        </div>
                        <Card className='tile-2'elevation='8'sx={{bgcolor:'secondary.main',borderRadius:'30px',margin:'2rem'}}>
                            <div className='goals-list'>
                                <Typography variant='h2' color='primary.main' sx={{display:'flex', justifyContent:'left', alignItems:'center',padding:'1rem'}}>
                                     Goals
                                </Typography>
                                <Typography variant='h4' color={'primary.main'} sx={{lineHeight:'60px',display:'flex', justifyContent:'left',padding:'1rem' }}>
                                    - high protein<br/> - low calorie<br/>- low carbs<br/>- easy to make
                                </Typography>
                            </div>
                        </Card>
                        <Card className='tile-3' elevation='8' sx={{bgcolor:'secondary.main',borderRadius:'30px',margin:'2rem'}}>
                            <Typography variant='h4' color='primary.main' sx={{display:'flex', justifyContent:'left', alignItems:'center',padding:'1rem'}}>
                                   Preferences
                            </Typography>
                            <Typography variant='h5' color={'primary.main'} sx={{lineHeight:'60px',display:'flex', justifyContent:'left',padding:'1rem' }}>
                                    - keto friendly<br/> - cooking for kids

                            </Typography>
                        </Card>
                    </div>
                </Box>
            </Card>
            <Paper elevation={24} sx={{height:'600px',marginTop:'1rem'}}>

            </Paper>
         </Container>
        </>
    )
}

export default Profile;