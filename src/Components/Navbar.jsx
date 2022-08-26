import React from 'react'
import OurLogo from '../ProjectImages/Picture/InHerPowerLogo.png'
import '../Styles/Navbar.css';
import Button from './Button';

const Navbar = () => {
  return (
    <div className="Navbar__Container">
        <div className="Navbar__Logo">
            <img id='NavLogo' src={OurLogo} alt="" />
        </div>
        <div className="Navbar__Menu">
            <ul className="Navbar__List-container">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Programs</li>
                <li>Our Priority</li>
                <Button
                name='Join Us'
                className='Navbar__button'
                type='button'
                />
            </ul>
        </div>
    </div>
  )
}

export default Navbar