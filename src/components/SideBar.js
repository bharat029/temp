import React from 'react';
import {NavLink} from 'react-router-dom';
import Me from '../imgs/me.png'
import { connect } from 'react-redux'

const SideBar = ({ name, one_line_descrtiption, email, linkedin, github }) => {
    const clickHandler = (e) => {
        document.getElementById('wrapper').classList.remove('menuDisplayed')
    }

    return (
    <div className="col-md-3 d-md-block" id="sidebar">
        <div id="me" className="row">
        <img src={Me} alt="Kunjal Panchal" />
        <h1>{ name }</h1>
        <p>{ one_line_descrtiption }</p>
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
                <a href={ "mailto:" + email } className="fa fa-envelope-square"><span>E-mail</span></a>
            </li>
            <li>
                <a href={ linkedin } className="fa fa-linkedin"><span>Linkedin</span></a>
            </li>
            <li>
                <a href={ github } className="fa fa-github"><span>Github</span></a>
            </li>
        </ul>
        </div>
    </div>
    )
}

const mapStateToProp = (state) => {
    return {
      name: state.aboutme.name,
      one_line_descrtiption: state.aboutme.one_line_descrtiption,
      email: state.aboutme.email,
      linkedin: state.aboutme.linkedin,
      github: state.aboutme.github
    }
  }
  
  export default connect(mapStateToProp)(SideBar)