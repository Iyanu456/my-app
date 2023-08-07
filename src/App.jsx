import React from 'react'
import NavSection from './components/NavSection'
import MainSection from './components/MainSection'
import picture1 from './assets/images/image-retro-pcs.jpg'
import picture2 from './assets/images/image-gaming-growth.jpg'
import picture3 from './assets/images/image-top-laptops.jpg'
import ArticleCard from './components/ArticleCard'

function App() {

    let data = [
        {
            id: '01',
            image: picture1,
            title: 'Reviving Retro PCs',
            caption: 'What happens when old PCs get upgrades'
        },
        {
            id: '02',
            image: picture2,
            title: 'Reviving Retro PCs',
            caption: 'What happens when old PCs get upgrades'
        },
        {
            id: '03',
            image: picture3,
            title: 'Top 10 Laptops of 2022',
            caption: 'What happens when old PCs get upgrades'
        }
    ]

    let customStyle = {
        display: "flex",
        gap: "1.2em",
        justifyContent: "center",
        marginTop: "4em",
        marginBottom: "1em"
    }
    return(
    <>
        <div>
            <NavSection />
            <MainSection />
        </div>
        <div style={customStyle}>
            {data.map((items) => 
            <ArticleCard
            key={items.id}
            image={items.image}
            id={items.id}
            title={items.title}
            caption={items.caption}
            />)}
        </div>
    </>
    )
}

export default App
