/* eslint-disable */
import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SideBar() {
  
    return (
    <div className="col-md-3 d-md-block" id="sidebar">
        <div id="me" className="row">
        <img src="/imgs/me.jpeg" alt="Kunjal Panchal" />
        <h1>Kunjal Panchal</h1>
        <p>Computer Science Major</p>
        </div>
        <div id="navi" className="row">
        <ul className="navi">
            <li>
                <NavLink id="aboutme" className="navi-item" exact to="/">About me</NavLink>
            </li>
            <li>
                <NavLink id="projects" className="navi-item" to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink id="cv" className="navi-item" to="/cv">CV</NavLink>
            </li>
        </ul>
        </div>
        <div id="contact" className="row">
        <ul className="contact-info">
            <li>
            <a href="mailto:kunjalspanchal@gmail.com" className="fa fa-envelope-square"></a>
            </li>
            <li>
            <a href="https://in.NavLinkedin.com/in/kunjal-panchal-07a0b514b" className="fa fa-NavLinkedin"></a>
            </li>
            <li>
            <a href="https://github.com/astuary" className="fa fa-github"></a>
            </li>
        </ul>
        </div>
    </div>
    )
}
