import React from 'react'
import { Link } from 'react-router-dom'

function Section() {
    return (
        <div>
            <h1>section</h1>
            <Link to='/'>EVENTS AND NEWS</Link>
            <Link to='/section'>SECTION</Link>
            <Link to='/getinvolved'>GET INVOLVED</Link>
            <Link to='/about'>ABOUT</Link>
        </div>
    )
}

export default Section
