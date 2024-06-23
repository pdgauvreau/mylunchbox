import React from 'react';
import './header.css';

function Header(){
    return (
        <div className='header'>
          <div className ='logo-container'>
            <h>mylunch.box</h>
          </div>
          <div className='pages-container'>
            <a href='/'>Find</a>
            <a href='/'>Create</a>
            <a href='/'>Share</a>
            <a href='/'>Settings</a>
            <button href='/'> sign up</button>
          </div>
        </div>
    );
}

export default Header;