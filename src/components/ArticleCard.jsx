import React from 'react'
import '../styles/ArticleCard.css'

function ArticleCard(props) {
    return (
        <section className='article-card'>
            <img src={props.image} alt='retro pc'/>
            <div>
                <h2>{props.id}</h2>
                <h3>{props.title}</h3>
                <p>{props.caption}</p>
            </div>
        </section>
    )
}

export default ArticleCard