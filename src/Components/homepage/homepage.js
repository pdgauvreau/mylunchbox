import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



import './homepage.css';

function Homepage(){
    return(
        <Box 
        bgcolor={'fifth.main'}>
        <Container 
        className='container'>
                <Grid className='container-grid' container spacing='4'>
                   
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={9}>
                        <Typography 
                        className='social-text'
                        display={'flex'} 
                        justifyContent={'center'} 
                        variant='h1' 
                        color={'fourth.main'}>a social media for good eats</Typography>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                     {/* FIRST BOX */}
                    <Grid item xs={5.5}>
                        <Card className='description' elevation={8}>
                        <Typography variant='h3' display={'flex'} justifyContent={'center'} margin={'1rem'}> pack.</Typography>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur. Quis aute iure reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    obcaecat cupiditat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                </p>
                        </Card>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={5.5}>   
                        <Card  className='description' elevation={8}>
                        <Typography variant='h3' display={'flex'} justifyContent={'center'} margin={'1rem'}> find.</Typography>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                 corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                 consequatur. Quis aute iure reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                   obcaecat cupiditat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} height='40px'/>
                    {/* Second row */}
                    <Grid item xs={5.5}>
                        <Card className='description' elevation={8}>
                        <Typography variant='h3' display={'flex'} justifyContent={'center'} margin={'1rem'}> create.</Typography>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                    consequatur. Quis aute iure reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    obcaecat cupiditat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                </p>
                        </Card>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={5.5}>   
                        <Card elevation={8} className='description'>
                            <Typography variant='h3' display={'flex'} justifyContent={'center'} margin={'1rem'}> share.</Typography>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrum exercitationem ullam 
                                 corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                 consequatur. Quis aute iure reprehenderit in voluptate velit
                                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                   obcaecat cupiditat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} height='40px'/>
                </Grid>
        </Container>
        </Box>
    )
}

export default Homepage;