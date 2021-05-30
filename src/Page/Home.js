import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <span style={{ color: "#black" }}>Welcome to the BCS Student Voice!</span><br />
            <span>Student-inspired and managed news for Baker Charter Schools.s</span><br />
            <span>Student managed. Student run. Student Inspired.</span><br />

            <img src="/src/Image/writer.jpg" alt='not found'></img>
            <span>Who Are We?</span><br />
            <span>The BCS Student Voice is an online newspaper for Baker Charter Schools run by a team of creative BWA and BEC students. We are dedicated to strengthening the BCS community, so you will often find us bleary-eyed and hunched over our computer screens for days at a time (just kidding).</span><br />
            <button className="btn btn-success">More Info!</button>
            <button className="btn btn-success">Email Us!</button><br />

            <img src='/src/Image/writer.jpg'></img>
            <p>Every young person should be able to voice their opinions about the world.</p>
            <span>That's what the BCS Student Voice is for.</span><br />

            <h1>pagination</h1>

            <p>Get your creative side on.</p>
            <p>Get involved with the BCS Student Voice!</p>
            <button className="btn btn-success">Students</button>
            <button className="btn btn-success">Parents and  Staff</button><br />


            <span>Inspirational Quote</span><br />
            <span>"Do what you do. Do what makes you unique. Do what makes you happy"</span><br />
            <span>~ Seán William McLoughlin</span>

            <footer className="section footer-classic context-dark bg-image">
                <p className='footer-copyright text-center py-3'>© Baker Web Academy. Proudly created with Wix.com</p>
                <Link to='/'>HOME</Link>
                <Link to='/section'>SECTION</Link>
                <Link to='/getinvolved'>GET INVOLVED</Link>
                <Link to='/about'>ABOUT</Link>
            </footer>
        </div>
    )
}

export default Home
