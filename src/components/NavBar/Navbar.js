import React from 'react';
import Button from '../UI/Button';
import './NavBar.css';
import logo from '../../Assets/LandingPage/Logo.png'
function Navbar() {

    const onClickHandler = () => {
        console.log('hii');
    }
    return (
        <div className='navbar'>
            <div className='navbar__first'>
                <img src={logo} alt={"logo"} />
            </div>

            <div className='navbar__last'>
                <div>News Updates</div>
                <Button onClick={onClickHandler}>Login</Button>
            </div>
        </div>








    )
}

export default Navbar;