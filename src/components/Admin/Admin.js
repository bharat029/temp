import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../store/actions/authActions'
import PersonalDetailsForm from './Forms/PersonalDetailsForm'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import AboutMeListView from './ListView/AboutMeListView'
import ProjectListView from './ListView/ProjectsListView'
import CVListView from './ListView/CVListView'
import EducationListView from './ListView/EducationListView'
import CertificateListView from './ListView/CertificateListView'
import SoftwareListView from './ListView/SoftwareListView'
import InterestListView from './ListView/InterestListView'

class Admin extends Component {
  render() {
    const { personal_details, auth } = this.props

    if(auth.uid){
      return (
        <>
          <Helmet>
            {
              personal_details ? <title>Admin - {personal_details.fname + " " + personal_details.lname} </title> 
              : <title>Admin - </title>
            }
          </Helmet>
          <div className="page">
            <div id="page-title" className="row" style={{ width: "100%" }}>
              <h2 className="col-8">{ personal_details ? "Welcome " + personal_details.fname : "Welcome" }</h2>
              <div className="m-1"><button className="btn btn-primary" onClick={() => this.props.signOut()}>Log Out</button></div>
            </div>
            <div id="page-content">
              <Router>
              <div className="row">
                <NavLink exact to="/admin/" className="admin-navi col-3" onClick={this.clickHanfler} id="aboutme">About Me</NavLink> 
                <NavLink to="/admin/projects" className="admin-navi col-3" onClick={this.clickHanfler} id="projecct">Projects</NavLink> 
                <NavLink to="/admin/cv" className="admin-navi col-3" onClick={this.clickHanfler} id="cv">CV</NavLink> 
                <NavLink to="/admin/personaldetails" className="admin-navi col-3" id="personal_details">Personal Details</NavLink> 
              </div>
              <Route exact path="/admin/" component={AboutMeListView} />            
              <Route path="/admin/projects" component={ProjectListView} />            
              <Route exact path="/admin/cv" component={CVListView} />            
              <Route path="/admin/cv/education" component={EducationListView} />            
              <Route path="/admin/cv/certificate" component={CertificateListView} />            
              <Route path="/admin/cv/software" component={SoftwareListView} />            
              <Route path="/admin/cv/interest" component={InterestListView} />            
              <Route path="/admin/personaldetails" component={PersonalDetailsForm} />            
              </Router>
            </div>
          </div>  
        </>
      )
    } else {
      return <Redirect to="/signin" />
    }
  }
}

const mapStateToProp = (state) => {
  return {
    auth: state.firebase.auth,
    personal_details: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0] : null,
  }
}

const mapDispatchToProp = dispatch => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'personal_details' },
  ])
)(Admin)
