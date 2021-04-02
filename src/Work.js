import React from 'react'
import picture from "./photo/webfoto.jpeg";


function Work() {
    return (
        <div className="work">
            <h1>Work</h1>
            <img className="picture" src={picture} alt="pict" />
        </div>
    )
}

export default Work;
