import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { addAboutMe, updateAboutMe, deleteAboutMe } from '../../store/actions/aboutmeActions'
import { addProject, updateProject, deleteProject } from '../../store/actions/projectActions'
import { addEducation, updateEducation, deleteEducation, addCertificate, updateCertificate, deleteCertificate, addSoftware, updateSoftware, deleteSoftware, addInterest, updateInterest, deleteInterest } from '../../store/actions/cvActions'
import { updatePersonalDetails } from '../../store/actions/personal_detailsActions'
import { signIn, signOut } from '../../store/actions/authActions'
import AboutMe from './Forms/AboutMe'
import Project from './Forms/Project'
import Education from './Forms/Education'
import Certificate from './Forms/Certificate'
import Sotware from './Forms/Software'
import Interest from './Forms/Interest'
import PersonalDetails from './Forms/PersonalDetails'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Admin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       display: 'aboutme',
       data: null,
       idx: null
    }
  }
  
  clickHanfler = (e) => {
    this.setState({
      display: e.target.id
    })
  }

  edits = (e) =>{
    e.preventDefault()

    switch (this.state.display) {
      case "aboutmeform":
        if(this.state.data){
          this.props.updateAboutMe({abtme: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() }, this.state.idx)
        } else {
          this.props.addAboutMe({abtme: e.target.childNodes[0].childNodes[1].value, createdOn: new Date() })
        }
  
        this.setState({
          display: 'aboutme',
          data: null
        })
        break
      case "projectform": 
        this.setState({
          display: 'projecct',
          data: null
        })
        break
      case "educationform": 
        let edu = {}

        e.target.childNodes.forEach(ele => {
          if(ele.id !== 'submit'){
            edu[ 'e-' + ele.childNodes[1].id] = ele.childNodes[1].value
          }
        })

        edu['createdOn'] = new Date()
        
        if(this.state.data){
          this.props.updateEducation(edu, this.state.idx)
        } else {
          this.props.addEducation(edu)
        }

        this.setState({
          display: 'education',
          data: null
        })
        break
      case "certificateform": 
        let certi = {}

        e.target.childNodes.forEach(ele => {
          if(ele.id !== 'submit'){
            certi[ 'c-' + ele.childNodes[1].id] = ele.childNodes[1].value
          }
        })

        certi['createdOn'] = new Date()
        
        if(this.state.data){
          this.props.updateCertificate(certi, this.state.idx)
        } else {
          this.props.addCertificate(certi)
        }

        this.setState({
          display: 'certificate',
          data: null
        })
        break
      case "softwareform":
        if(this.state.data){
          this.props.updateSoftware({sft: e.target.childNodes[0].childNodes[1].value, createdOn: new Date()}, this.state.idx)
        } else {
          this.props.addSoftware({sft: e.target.childNodes[0].childNodes[1].value, createdOn: new Date()})
        }
      
        this.setState({
          display: 'software',
          data: null
        })
        break   
      case "interestform": 
        let inte = {}

        e.target.childNodes.forEach(ele => {
          if(ele.id !== 'submit'){
            inte[ 'i-' + ele.childNodes[1].id] = ele.childNodes[1].value
          }
        })

        inte['createdOn'] = new Date()

        if(this.state.data){
          this.props.updateInterest(inte, this.state.idx)
        } else {
          this.props.addInterest(inte)
        }

        this.setState({
          display: 'interest',
          data: null
        })
        break
      case "personal_details": 
        this.setState({
          display: 'aboutme',
        })
        break
      default:
        break
    }
  }

  delete = (e) => {
    switch (this.state.display) {
      case "aboutme":
        this.props.deleteAboutMe(e.target.id)
        break
      case "projecct":
        this.props.deleteProject(e.target.id, e.target.name)
        break
      case "education": 
        this.props.deleteEducation(e.target.id)
        break
      case "certificate": 
        this.props.deleteCertificate(e.target.id)
        break
      case "software": 
        this.props.deleteSoftware(e.target.id)
        break
      case "interest": 
        this.props.deleteInterest(e.target.id)
        break
      default:
        break
    }
  }

  update = (e) => {
    switch (this.state.display) {
      case "aboutme":
        this.setState({
          display: "aboutmeform", 
          data: this.props.aboutme[e.target.id].abtme,
          idx: this.props.aboutme[e.target.id].id
        })
        break
      case "projecct":
        this.setState({
          display: "projectform", 
          data: this.props.projects[e.target.id],
          idx: this.props.projects[e.target.id].id
        })
        break
      case "education":
        this.setState({
          display: "educationform", 
          data: this.props.education[e.target.id],
          idx: this.props.education[e.target.id].id
        })
        break
      case "certificate":
        this.setState({
          display: "certificateform", 
          data: this.props.certificates[e.target.id],
          idx: this.props.certificates[e.target.id].id
        })
        break
      case "software":
        this.setState({
          display: "softwareform", 
          data: this.props.software[e.target.id].sft,
          idx: this.props.software[e.target.id].id
        })
        break
      case "interest":
        this.setState({
          display: "interestform", 
          data: this.props.interests[e.target.id],
          idx: this.props.interests[e.target.id].id
        })
        break
      default:
        break
    }
  }

  display = (dis) => {
    switch(dis){
      case 'aboutme': return [
        this.props.aboutme ? this.props.aboutme.map((abtme, idx) => <li key={abtme.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ abtme.abtme.slice(0, 160) }...</span><div><button onClick={this.delete} id={abtme.id} className="btn btn-danger mt-2">Delete</button></div></li>) : <p key="loadingabtme">Loading Data... Please wait!!</p>,
        <button key="abtmebtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="aboutmeform">Add</button>
      ] 
      case 'projecct': return [
        this.props.projects ? this.props.projects.map((project, idx) => <li key={project.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ project['p-title'] }</span><button onClick={this.delete} id={project.id} name={project['p-title']} className="btn btn-danger">Delete</button></li>) : <p key="loadingproject">Loading Data... Please wait!!</p>,
        <button key="projectbtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="projectform">Add</button>
      ]
      case 'cv': return (
        <>
          <li style={{ cursor: "pointer" }} onClick={this.clickHanfler} id="education" className="mt-3 pl-5 border row">Education</li>
          <li style={{ cursor: "pointer" }} onClick={this.clickHanfler} id="certificate" className="mt-3 pl-5 border row">Certificates</li>
          <li style={{ cursor: "pointer" }} onClick={this.clickHanfler} id="software" className="mt-3 pl-5 border row">Softwares Games</li>
          <li style={{ cursor: "pointer" }} onClick={this.clickHanfler} id="interest" className="mt-3 pl-5 border row">Interests</li>
        </>
      )
      case 'education': return [
        this.props.education ? this.props.education.map((edu, idx) => <li key={edu.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ edu['e-title'] }</span><button onClick={this.delete} id={edu.id} className="btn btn-danger">Delete</button></li>) : <p key="loadingedu">Loading Data... Please wait!!</p>,
        <button key="edubtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="educationform">Add</button>
      ]
      case 'certificate': return [
        this.props.certificates ? this.props.certificates.map((certificate, idx) => <li key={idx} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ certificate['c-title'] }</span><button onClick={this.delete} id={certificate.id} className="btn btn-danger">Delete</button></li>) : <p key="loadingcerti">Loading Data... Please wait!!</p>,
        <button key="edubtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="certificateform">Add</button>
      ]
      case 'software': return [
        this.props.software ? this.props.software.map((sft, idx) => <li key={sft.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ sft.sft }</span><button onClick={this.delete} id={sft.id} className="btn btn-danger">Delete</button></li>) : <p key="loadingsft">Loading Data... Please wait!!</p>,
        <button key="edubtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="softwareform">Add</button>
      ]
      case 'interest': return [
        this.props.interests ? this.props.interests.map((interest, idx) => <li key={interest.id} className="mt-3 border row"><span onClick={this.update} id={idx} style={{ cursor: "pointer" }} className="col-10">{ interest['i-title'] }</span><button onClick={this.delete} id={interest.id} className="btn btn-danger">Delete</button></li>) : <p key="loadinginte">Loading Data... Please wait!!</p>,
        <button key="edubtn" className="btn btn-success m-5 col-2" onClick={this.clickHanfler} id="interestform">Add</button>
      ]
      case 'personal_details': return <PersonalDetails details={this.props.personal_details} edits={this.edits}  /> 
      case 'aboutmeform': return <AboutMe abtme={this.state.data} edits={this.edits}  /> 
      case 'projectform': return <Project project={this.state.data} edits={this.edits}  /> 
      case 'educationform': return <Education education={this.state.data} edits={this.edits}  /> 
      case 'certificateform': return <Certificate certi={this.state.data} edits={this.edits}  /> 
      case 'softwareform': return <Sotware sft={this.state.data} edits={this.edits}  /> 
      case 'interestform': return <Interest inte={this.state.data} edits={this.edits}  /> 
      default: return null
    }
  }

  componentWillUnmount = () => {
    this.props.signOut()
  }

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
              <div className="mb-1"><button className="btn btn-primary" onClick={() => this.props.signOut()}>Log Out</button></div>
            </div>
            <div id="page-content">
              <div className="row">
                <button className="btn btn-success rounded-0 border-left border-white col-3" onClick={this.clickHanfler} id="aboutme">About Me</button> 
                <button className="btn btn-success rounded-0 border-left border-white col-3" onClick={this.clickHanfler} id="projecct">Projects</button> 
                <button className="btn btn-success rounded-0 border-left border-white col-3" onClick={this.clickHanfler} id="cv">CV</button> 
                <button className="btn btn-success rounded-0 border-left border-white col-3" onClick={this.clickHanfler} id="personal_details">Personal Details</button> 
              </div>
              <ul className="list-unstyled">{ this.display(this.state.display) }</ul>
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
    aboutme: state.firestore.ordered.aboutme,
    projects: state.firestore.ordered.projects,
    education: state.firestore.ordered.education,
    certificates: state.firestore.ordered.certificate,
    software: state.firestore.ordered.software,
    interests: state.firestore.ordered.interest,
    personal_details: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0] : null,
  }
}

const mapDispatchToProp = dispatch => {
  return {
    addAboutMe: (abtme) => dispatch(addAboutMe(abtme)),
    updateAboutMe: (abtme, idx) => dispatch(updateAboutMe(abtme, idx)),
    deleteAboutMe: (idx) => dispatch(deleteAboutMe(idx)),
    addProject: (project) => dispatch(addProject(project)),
    updateProject: (project, idx) => dispatch(updateProject(project, idx)),
    deleteProject: (idx, imgname) => dispatch(deleteProject(idx, imgname)),
    addEducation: (edu) => dispatch(addEducation(edu)),
    updateEducation: (edu, idx) => dispatch(updateEducation(edu, idx)),
    deleteEducation: (idx) => dispatch(deleteEducation(idx)),
    addCertificate: (certi) => dispatch(addCertificate(certi)),
    updateCertificate: (certi, idx) => dispatch(updateCertificate(certi, idx)),
    deleteCertificate: (idx) => dispatch(deleteCertificate(idx)),
    addSoftware: (sft) => dispatch(addSoftware(sft)),
    updateSoftware: (sft, idx) => dispatch(updateSoftware(sft, idx)),
    deleteSoftware: (idx) => dispatch(deleteSoftware(idx)),
    addInterest: (inte) => dispatch(addInterest(inte)),
    updateInterest: (inte, idx) => dispatch(updateInterest(inte, idx)),
    deleteInterest: (idx) => dispatch(deleteInterest(idx)),
    updatePersonalDetails: (details) => dispatch(updatePersonalDetails(details)),
    signIn: (credentials) => dispatch(signIn(credentials)),
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProp, mapDispatchToProp),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdOn', 'desc'] },
    { collection: 'aboutme', orderBy: ['createdOn'] },
    { collection: 'personal_details' }, 
    { collection: 'education', orderBy: ['createdOn', 'desc'] },
    { collection: 'certificate', orderBy: ['createdOn', 'desc'] },
    { collection: 'software', orderBy: ['createdOn', 'desc'] },
    { collection: 'interest', orderBy: ['createdOn', 'desc'] }
  ])
)(Admin)
