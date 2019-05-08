/* eslint-disable */
import React from 'react';
import {NavLink} from 'react-router-dom';
import Me from './imgs/me.png'

export default function SideBar() {

    const clickHandler = (e) => {
        document.title = e.target.name + ' - Kunjal Panchal'
        document.getElementById('wrapper').classList.remove('menuDisplayed')
    }

    return (
    <div className="col-md-3 d-md-block" id="sidebar">
        <div id="me" className="row">
        <img src={Me} alt="Kunjal Panchal" />
        <h1>Kunjal Panchal</h1>
        <p>Computer Science Major</p>
        </div>
        <div id="navi" className="row">
        <ul className="navi">
            <li>
                <NavLink id="aboutme" name="About Me" onClick={clickHandler} className="navi-item" exact to="/">About me</NavLink>
            </li>
            <li>
                <NavLink id="projects" name="Projects" onClick={clickHandler} className="navi-item" to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink id="cv" name="CV" onClick={clickHandler} className="navi-item" to="/cv">CV</NavLink>
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
