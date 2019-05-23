import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const SideBar = ({ personal_details }) => {
    const clickHandler = (e) => {
        document.getElementById('wrapper').classList.remove('menuDisplayed')
    }

    return (
    <div className="col-md-3 d-md-block" id="sidebar">
        <div id="me" className="row">
        <img src={personal_details ? personal_details.img : null} alt={personal_details ? personal_details.fname + " " + personal_details.lname : null } />
        <h1>{ personal_details ? personal_details.fname + " " + personal_details.lname : null }</h1>
        <p>{ personal_details ? personal_details.desc : null }</p>
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
                <a href={ personal_details ? "mailto:" + personal_details.email : "#" } rel="noopener noreferrer" target='_blank' className="fa fa-envelope-square"><span>E-mail</span></a>
            </li>
            <li>
                <a href={ personal_details ? personal_details.linkedin : "#" } rel="noopener noreferrer" target='_blank' className="fa fa-linkedin"><span>Linkedin</span></a>
            </li>
            <li>
                <a href={ personal_details ? personal_details.github : "#" } rel="noopener noreferrer" target='_blank' className="fa fa-github"><span>Github</span></a>
            </li>
        </ul>
        </div>
    </div>
    )
}

const mapStateToProp = (state) => {
    return {
        personal_details: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0] : null,
    }
  }
  
  export default compose(
    connect(mapStateToProp),
    firestoreConnect([
      { collection: 'personal_details' }
    ])
  )(SideBar)
  