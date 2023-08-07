import React from 'react'
import NavSection from './components/NavSection'
import MainSection from './components/MainSection'
import ArticleCard from './components/ArticleCard'
import data from './data/seed.js'

function App() {

    let customStyle = {
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        //gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1.2em",
        marginTop: "4em",
        marginBottom: "1em"
    }
    return(
    <>
        <div>
            <NavSection />
            <MainSection />
        </div>
        <div className="article-card-container" style={customStyle}>
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
