import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'

import { BiSearch } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Link to="/" className='logo'>
                    <img src={logo} alt="" />
                </Link>
                    <RxHamburgerMenu className='ham-menu' onClick={handleClick} />

            </div>

            <div className={click ? "ham-list showNavbar" : "ham-list"}>
                <ul className="pages">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Men">Men</Link>
                    </li>
                    <li>
                        <Link to="/Women">Women</Link>
                    </li>
                    <li>
                        <Link to="/Kids">Kids</Link>
                    </li>
                    <li>
                        <Link to="/HomeLiving">Home&Living</Link>
                    </li>
                    <li>
                        <Link to="/Beauty">Beauty</Link>
                    </li>
                    <li>
                        <Link to="/Signup"><button className='signup'>Sign up</button></Link>
                    </li>
                </ul>

                <div className="input-container">
                    <BiSearch className='search-icon' />
                    <input type="text" placeholder='search for products, brand and more' value={props.inputValue} onChange={(e) => {props.setInputValue(e.target.value)}} />
                </div>
                

                <div className="others-container">
                    <div className="sub-container">
                        <CgProfile /> <span>Profile</span>
                    </div>
                    <div className="sub-container">
                        <AiOutlineHeart /> <span>Wishlist</span>
                    </div>
                    <div className="sub-container">
                        <BsBag /> <span>Bag</span>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Navbar;