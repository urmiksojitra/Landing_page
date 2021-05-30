import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="container"></div>
            <nav class="navbar navbar-light bg-light">
                <h1 className="navbar-brand">BCS Student Voice</h1>
                <Link to='/' className='nav-link'>HOME</Link>
                <Link to='/section' className='nav-link'>SECTION</Link>
                <Link to='/getinvolved' className='nav-link'>GET INVOLVED</Link>
                <Link to='/about' className='nav-link'>ABOUT</Link>
            </nav>
        </div>
    )
}

export default Header
