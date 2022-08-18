import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navMenu">
            <Link to="/">
                <a className='nav-item'>Home</a>
            </Link>
            <Link to="/About">
                <a className='nav-item'>About</a>
            </Link>
            <Link to="/Contact">
                <a className='nav-item'>Contact</a>
            </Link>
        </nav>
    )
}

export default Navbar