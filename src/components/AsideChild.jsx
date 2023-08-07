import React from 'react'

function AsideChild(props) {

    return (
        <section className='aside-child'>
            <h3>{props.title}</h3>
            <p>{props.caption}</p>
        </section>
    )
}

export default AsideChild