import React, { Component } from 'react'
import ProjectPopUp from './ProjectPopUp'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       project: null
    };
  }

  componentDidMount = () => {
    window.onclick = (e) => {
      if (e.target === document.getElementById('project')) {
        this.closePopUp()
      }
    };    
  } 

  btnClick = (e) => {
    this.setState({
      project: this.props.projects[e.target.id]
    })
  }

  closePopUp = e => {
    this.setState({
      project: null
    })
  }

  render() {
    const { projects, fname, lname } = this.props
    const { project } = this.state

    return (
      <>
        <Helmet>
          {
            fname && lname ? <title>Project - {fname + " " + lname} </title> 
            : <title>Project - </title>
          }
        </Helmet>
        <div className="page">
          <h2 id="page-title">Project Section</h2>
          <div id="page-content">
            <div id="proj-wrapper" className="row no-gutters">
              {
                projects ? 
                projects.map((proj, idx) => <div key={proj.id} className="col-lg-3 col-md-4 try col-sm-6 col-12 img-container"><img className="project-button" src={proj['p-img']} alt={proj['p-title']} /><div role="button" tabIndex="0" onClick={this.btnClick} id={idx} className="overlay"><span id={idx}>{proj['p-title']}</span></div></div>) : 
                <p>Loading Data... Please wsit!!</p>
              }
            </div>
            {
              !project ? 
              null:<ProjectPopUp project={project} closePopUp={this.closePopUp} />
            }
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    fname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].fname : null,
    lname: state.firestore.ordered.personal_details ? state.firestore.ordered.personal_details[0].lname : null,
    projects: state.firestore.ordered.projects,
  }
}

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdOn', 'desc'] },
    { collection: 'personal_details' }
  ])
)(Projects)
