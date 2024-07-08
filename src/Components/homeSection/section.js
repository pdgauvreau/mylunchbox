import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './section.css'

function Section(){
    return(
            <Container maxWidth='xl'>
                <Box 
                bgcolor='#a4243b'
                height={'900px'}>
                    <Container>
                        <Box>
                            <Typography variant='h1' paddingTop={'2rem'} color={'#d8c99b'} fontStyle={'initial'}>
                                PACK
                            </Typography>
                            <Typography variant='body1' paddingY={'1rem'}color={'#d8c99b'} fontWeight={'600'} fontFamily={'monospace'}> Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Proin bibendum tortor quis dolor tristique malesuada.
                                Suspendisse velit dui, convallis id enim vitae, maximus ullamcorper 
                                quam. Aliquam eget pretium enim. Mauris gravida ligula quis massa 
                                vulputate tincidunt. Sed sagittis, tellus vel sagittis rhoncus, enim 
                                augue posuere felis, quis posuere ipsum lacus quis sapien. Praesent 
                                aliquet quis nulla sed consequat. 
                            </Typography>
                            <Card variant='outlined' padding={'1rem'} sx={{height:'500px', bgcolor:'darkgrey', outline:'1px solid black'}}></Card>
                        </Box> 
                    </Container>
                </Box>
                <Box 
                bgcolor='#e7d7c1'
                height={'900px'}>
                    <Container>
                        <Typography variant='h1'paddingTop={'2rem'} color={'#a4243b'}>
                            FIND
                        </Typography>
                        <Typography variant='body1' paddingY={'1rem'}color={'#a4243b'} fontWeight={'600'} fontFamily={'monospace'}> Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Proin bibendum tortor quis dolor tristique malesuada.
                                Suspendisse velit dui, convallis id enim vitae, maximus ullamcorper 
                                quam. Aliquam eget pretium enim. Mauris gravida ligula quis massa 
                                vulputate tincidunt. Sed sagittis, tellus vel sagittis rhoncus, enim 
                                augue posuere felis, quis posuere ipsum lacus quis sapien. Praesent 
                                aliquet quis nulla sed consequat. 
                        </Typography>
                        <Card variant='outlined' padding={'1rem'} sx={{height:'500px', bgcolor:'darkgrey', outline:'1px solid black'}}></Card>
                    </Container>
                </Box>
                <Box 
                bgcolor='#8bbeb2'
                height={'900px'}>
                    <Container>
                        <Typography variant='h1'paddingTop={'2rem'} color={'fifth.main'}>
                            CREATE
                        </Typography>
                        <Typography variant='body1' paddingY={'1rem'}color={'fifth.main'} fontWeight={'600'} fontFamily={'monospace'}> Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Proin bibendum tortor quis dolor tristique malesuada.
                                Suspendisse velit dui, convallis id enim vitae, maximus ullamcorper 
                                quam. Aliquam eget pretium enim. Mauris gravida ligula quis massa 
                                vulputate tincidunt. Sed sagittis, tellus vel sagittis rhoncus, enim 
                                augue posuere felis, quis posuere ipsum lacus quis sapien. Praesent 
                                aliquet quis nulla sed consequat. 
                            </Typography>
                            <Card variant='outlined' padding={'1rem'} sx={{height:'500px', bgcolor:'darkgrey', outline:'1px solid black'}}></Card>
                    </Container>
                </Box>
                <Box 
                bgcolor='#a4243b'
                height={'900px'}>
                    <Container>
                        <Typography variant='h1'paddingTop={'2rem'} color={'#8bbeb2'}>
                            SHARE
                        </Typography>
                        <Typography variant='body1' paddingY={'1rem'}color={'#8bbeb2'} fontWeight={'600'} fontFamily={'monospace'}> Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Proin bibendum tortor quis dolor tristique malesuada.
                                Suspendisse velit dui, convallis id enim vitae, maximus ullamcorper 
                                quam. Aliquam eget pretium enim. Mauris gravida ligula quis massa 
                                vulputate tincidunt. Sed sagittis, tellus vel sagittis rhoncus, enim 
                                augue posuere felis, quis posuere ipsum lacus quis sapien. Praesent 
                                aliquet quis nulla sed consequat. 
                            </Typography>
                            <Card variant='outlined' padding={'1rem'} sx={{height:'500px', bgcolor:'darkgrey', outline:'1px solid black'}}></Card>
                    </Container>
                </Box>
            </Container>
    )
}

export default Section;