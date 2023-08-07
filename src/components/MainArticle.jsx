import React from 'react'
import picture from '../assets/images/image-web-3-desktop.jpg'
import '../styles/MainArticle.css'

function MainArticle() {
    return (
        <section className='main-article'>
            <img className='article-img-big' src={picture} alt='sd design'></img>
            <div>
                <h1 className='large-heading'>The Bright Future Of Web 3.0?</h1>
                <div>
                    <p>We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people</p>
                    <button className='article-button'>Read More</button>
                </div>
            </div>
        </section>
    )
}

export default MainArticle