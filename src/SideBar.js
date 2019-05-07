/* eslint-disable */
import React from 'react'

export default function SideBar({section, changeSection}) {
  
    const clickHandler = (e) => {
        e.preventDefault()

        changeSection(e.target.id)
    }

    return (
    <div className="col-md-3 d-md-block" id="sidebar">
        <div id="me" className="row">
        <img src="imgs/me.jpeg" alt="Kunjal Panchal" />
        <h1>Kunjal Panchal</h1>
        <p>Computer Science Major</p>
        </div>
        <div id="navi" className="row">
        <ul className="navi">
            <li>
            { 
                section === 'aboutme' ?  
                <a id="aboutme" className="navi-item show-active" onClick={clickHandler} href="About Me">About me</a> : 
                <a id="aboutme" className="navi-item" onClick={clickHandler} href="About Me">About me</a>
            }
            </li>
            <li>
            { 
                section === 'projects' ?  
                <a id="projects" className="navi-item show-active" onClick={clickHandler} href="Projects">Projects</a> : 
                <a id="projects" className="navi-item" onClick={clickHandler} href="Projects">Projects</a>
            }
            </li>
            <li>
            { 
                section === 'cv' ?  
                <a id="cv" className="navi-item show-active" onClick={clickHandler} href="CV">CV</a> :
                <a id="cv" className="navi-item" onClick={clickHandler} href="CV">CV</a>
            }
            </li>
        </ul>
        </div>
        <div id="contact" className="row">
        <ul className="contact-info">
            <li>
            <a href="mailto:kunjalspanchal@gmail.com" className="fa fa-envelope-square"></a>
            </li>
            <li>
            <a href="https://in.linkedin.com/in/kunjal-panchal-07a0b514b" className="fa fa-linkedin"></a>
            </li>
            <li>
            <a href="https://github.com/astuary" className="fa fa-github"></a>
            </li>
        </ul>
        </div>
    </div>
    )
}
