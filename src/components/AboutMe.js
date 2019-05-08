import React from 'react'

export default function AboutMe() {
  const aboutme = require('../pages/aboutMe.json')
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

