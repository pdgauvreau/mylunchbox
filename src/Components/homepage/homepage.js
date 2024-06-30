import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';



import './homepage.css';

function Homepage(){
    return(
        <Box 
        bgcolor={'fifth.main'}>
        <Container 
        className='container'>
                <Grid className='container-grid' container spacing='4'>
                    {/* FIRST BOX */}
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={9}>
                        <Box 
                        className='tagline'
                        elevation={0}
                        color={'secondary.main'}>Pack myLunch.box</Box>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={.25}/>
                    <Grid item xs={4.5} >
                        <Card className='section' elevation={15}></Card>
                    </Grid>
                    <Grid item xs={.5}/>
                    <Grid item xs={6.5}>   
                        <Card variant='outlined' className='description'>
                            <h1> pack.</h1>
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
                    <Grid item xs={.25}/>
                    <Grid item xs={12} height='40px'/>
                    {/* SECOND BOX */}
                    <Grid item xs={.25}/>
                    <Grid item xs={6.5}>
                        <Card variant='outlined' className='description' elevation ={15}>
                        <h1>find.</h1>
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
                    
                    <Grid item xs={.5}/>
                    <Grid item xs={4.5}>
                        <Card className='section' elevation ={15}>
                        </Card>
                    </Grid>
                    <Grid item xs={.25}/>
                    <Grid item xs={12} height='40px'/>
                    {/* THIRD BOX */}
                    <Grid item xs={.25}/>
                    <Grid item xs={4.5} >
                        <Card className='section' elevation={15}></Card>
                    </Grid>
                    <Grid item xs={.5}/>
                    <Grid item xs={6.5}>   
                        <Card variant='outlined' className='description'>
                            <h1> create.</h1>
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
                    <Grid item xs={.25}/>
                    <Grid item xs={12} height='40px'/>
                    {/* FOURTH BOX */}
                    <Grid item xs={.25}/>
                    <Grid item xs={6.5}>
                        <Card variant='outlined' className='description' elevation ={15}>
                        <h1>share.</h1>
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
                    
                    <Grid item xs={.5}/>
                    <Grid item xs={4.5}>
                        <Card className='section' elevation ={15}>
                        </Card>
                    </Grid>
                    <Grid item xs={.25}/>
                    <Grid item xs={12} height='100px'/>
                </Grid>
        </Container>
        </Box>
    )
}

export default Homepage;