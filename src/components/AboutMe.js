import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const AboutMe = ({ aboutme, fname, lname, email }) => {
    return (
    <>
      <Helmet>
        {
          fname && lname ? <title>About Me - {fname + " " + lname} </title> 
          : <title>About Me - </title>
        }
      </Helmet>
      <div className="page">
        <h2 id="page-title">About Me</h2>
        <div id="page-content">
          {
            aboutme ? aboutme.map(abtme => <p key={abtme.id}>{abtme.abtme}</p>) : <p>Loading Data... Please wait!!</p>
          }
        </div>
        <br></br>
        <p><strong>E-mail:  </strong><a id="email" href={ email ? "mailto:" + email : null}>{ email ? email : null }</a></p>
        <br></br>
        <br></br>
      </div>  
    </>
  )
}

const mapStateToProp = (state) => {
  return {
    aboutme: state.firestore.ordered.aboutme,
    fname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].fname : null,
    lname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].lname : null,
    email: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].email : null
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'aboutme' },
    { collection: 'personal_details'}
  ])
)(AboutMe)
