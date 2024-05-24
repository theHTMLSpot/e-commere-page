import React from 'react';


function NavBar()
{
    return(
        <>
        <div className="navbar">

        
        <div className="main">
            <ul>
                <li id='title'>
                    <p>sneakers</p>
                </li>
                <li>
                    <p>Collections</p>
                </li>
                <li>
                    <p>Men</p>
                </li>
                <li>
                    <p>Women</p>
                </li>
                <li>
                    <p>About</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
        </div>
        
        <div className="profile">
            <ul>
                <li>
                    <p>cart</p>

                    
                </li>
                <li>
                    <img src="" alt='profile'></img>
                </li>

            </ul>
            
        </div>
        </div>
        
        </>
    );
}

export default NavBar;