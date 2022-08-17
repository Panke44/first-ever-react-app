import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navMenu">
            <Link to="/">
                <a>Home</a>
            </Link>
            <Link to="/About">
                <a>About</a>
            </Link>
            <Link to="/Contact">
                <a>Contact</a>
            </Link>

        </nav>
    )
}

export default Navbar