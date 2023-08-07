import React from 'react'
import MainArticle from './MainArticle'
import AsideArticle from './AsideArticle'
import '../styles/Main.css'

function MainSection() {
    return (
    <div className='main-container'>
        <MainArticle />
        <AsideArticle />
    </div>
    )
}

export default MainSection