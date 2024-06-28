import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



import './homepage.css';

function Homepage(){
    return(
        <Container className='container'>
                <Grid container spacing='2'>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={9}>
                        <Card className='tagline' elevation={0}>Pack myLunch.box</Card>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={5} >
                        <Card className='section' elevation={15}></Card>
                    </Grid>
                    <Grid item xs={7}>   
                        <div className='description'>
                            <h1> PACK YOUR box</h1>
                            <p> this is a paragraph about packing a lunch box full of food! how exciting, to carry food around in a box.</p>
                        </div>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default Homepage;