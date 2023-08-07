import React from 'react'
import AsideChild from './AsideChild'
import '../styles/AsideArticle.css'

function AsideArticle() {
    return (
        <section className='aside-article'>
            <h2>New</h2>
            <AsideChild
                title="Hydrogen VS Electric Cars"
                caption="Will hydrogen fueled cars catch up to EVs?"
            />
            <AsideChild
                title="Hydrogen VS Electric Cars"
                caption="Will hydrogen fueled cars catch up to EVs?"
            />
            <AsideChild
                title="Hydrogen VS Electric Cars"
                caption="Will hydrogen fueled cars catch up to EVs?"
            />
        </section>
    )
}

export default AsideArticle