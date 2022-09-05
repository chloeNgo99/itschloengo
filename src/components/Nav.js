import React from 'react';

const Nav = () => {
    return (
        <div className='navbar'>
            <a href='#homeSection' >
                <h4>HOME</h4>
            </a>

            <a href='#aboutSection' >
                <h4>ABOUT</h4>
            </a>
            <a href='#projectSection' >
                <h4>PROJECTS</h4>
            </a>

            <a href='#contactSection'>
                <h4>CONTACT</h4>
            </a>
        </div>
    );
};
export default Nav;