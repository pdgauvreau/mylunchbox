import React from 'react';
import './endbar.css'

function Endbar(){
    return (
        <div className='all-endbar'>
            <div className='endbar-container'>
                <div className='logo-text'>
                    mylunch.box
                </div>
                <div className='endbar-text-area'>
                    <a href='/'>Find</a>
                    <a href='/'>Create</a>
                    <a href='/'>Share</a>
                    <a href='/'>Home</a>
                    <a href='/'>sign up</a>
                    <a href='/'>Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Endbar