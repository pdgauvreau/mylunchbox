import React from 'react';
import Box from '@mui/material/Box';
import './pages.css';

function PagesInfo(){
    return(
        <Box 
        className='box'
        bgcolor={'fourth.main'}>
            <div className='all'>
                <div className='container'>
                        
                        <div className='image-container-one'>
                            <div className='text-container-one'> 
                                <button  className='find-button'>FIND</button>
                            </div>
                        </div>
                    
                    
                        <div className='image-container-two'>
                            <div className='text-container-two'> 
                                <button  className='find-button'>SHARE</button>
                            </div>
                        </div>

                        <div className='image-container-three'>
                            <div className='text-container-one'> 
                                <button  className='find-button'>CREATE</button>
                            </div>
                        </div>              
                </div>
            </div>
        </Box>
    )
}

export default PagesInfo;