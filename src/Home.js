import React from 'react'
import photo from "./photo/manzara1.jpg";


function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <img className="photo" src={photo} alt="ph"/>
        </div>
    )
}

export default Home;
