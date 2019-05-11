import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

const AboutMe = ({ aboutme, email }) => {
    return (
    <>
      <Helmet>
        <title>About Me - Kunjal Panchal</title>
      </Helmet>
      <div className="page">
        <h2 id="page-title">About Me</h2>
        <div id="page-content">
          {
            aboutme.map((abtme, idx) => <p key={idx}>{abtme}</p>)
          }
        </div>
        <br></br>
        <p>E-mail:  <a id="email" href={ "mailto:" + email}>{ email }</a></p>
        <br></br>
        <br></br>
      </div>  
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.aboutme.aboutme,
    email: state.aboutme.email
  }
}

export default connect(mapStateToProp)(AboutMe)