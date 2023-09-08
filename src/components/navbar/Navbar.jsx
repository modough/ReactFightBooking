
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '../../assets/flight resa logo.jpg'
import { useState } from 'react';
import './navBar.css'


const Navbar = () => {
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const hideNavBar = () => {
        setActive('navBarMenu')
    }
    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className='navBarOneLi'>
                    <li className='flex'><BsPhoneVibrate />Support</li>
                    <li className='flex'><AiOutlineGlobal />Languages</li>
                </div>
                <div className='atb flex'>
                    <span>SignIn</span>
                    <span>SignOut</span>
                </div>
            </div>
            <div className="navBarTwo flex">
                <div className='logoDiv'>
                    <img className='logo' src={logo} alt="main logo" />
                    <h2>Flight Resa</h2>
                </div>
                <div className={active} >
                    <ul className='menu flex'>
                        <li onClick={hideNavBar} className='listItem'>Home</li>
                        <li onClick={hideNavBar} className='listItem'>About</li>
                        <li onClick={hideNavBar} className='listItem'>Offers</li>
                        <li onClick={hideNavBar} className='listItem'>Seats</li>
                        <li onClick={hideNavBar} className='listItem'>Destinations</li>
                    </ul>
                    <button onClick={hideNavBar} className='btn flex btnOne' type="">Contact</button>
                </div>
                <button className='btn flex btnTwo' type="">Contact</button>
                <div className='toggleIcon' onClick={showNavBar}>
                    <CgMenuGridO className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar