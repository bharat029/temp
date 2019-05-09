import React from 'react'
import { connect } from 'react-redux'

const AboutMe = ({ aboutme }) => {
    return (
    <div className="page">
      <h2 id="page-title">About Me</h2>
      <div id="page-content">
        {
          aboutme.map((abtme, idx) => <p key={idx}>{abtme}</p>)
        }
      </div>
      <br></br>
      <p>E-mail:  <a id="email" href="mailto:kunjalspanchal@gmail.com">kunjalspanchal@gmail.com</a></p>
      <br></br>
      <br></br>
    </div>  
  )
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.aboutme
  }
}

export default connect(mapStateToProp)(AboutMe)