import React from 'react'
import '../styles/Navigation.css'

function NavSection() {
    return(
        <div className="nav-container">
            <h1 style={{fontSize: "2em"}}>W.</h1>
            <div className='nav-group'>
                <p>Home</p>
                <p>News</p>
                <p>Popular</p>
                <p>Trending</p>
                <p>Categories</p>
            </div>
        </div>
    )
}

export default NavSection
