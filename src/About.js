import React from 'react'
import view from "./photo/manzara3.jpg";


function About() {
    return (
        <div className="about">
             <h1>About</h1>
             <img className="view" src={view} alt="manzara"/>
        </div>
    )
}

export default About;
