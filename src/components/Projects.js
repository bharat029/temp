import React, { Component } from 'react'
import ProjectPopUp from './ProjectPopUp'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

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
      project: this.props.projects.find(project => project['p-title'] === e.target.alt)
    })
  }

  closePopUp = e => {
    this.setState({
      project: null
    })
  }

  render() {
    const project_list = this.props.projects.map(project => project['p-title'])
    const { project } = this.state
    document.title = 'Projects - Kunjal Panchal'

    return (
      <>
        <Helmet>
          <title>Projects - Kunjal Panchal</title>
        </Helmet>
        <div className="page">
          <h2 id="page-title">Project Section</h2>
          <div id="page-content">
            <div id="proj-wrapper" className="row no-gutters">
              {project_list.map((proj, idx) => <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12"><img className="project-button" onClick={this.btnClick} src={require('../imgs/' + proj +'.png')} alt={proj} /></div>)}
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
    projects: state.projects
  }
}

export default connect(mapStateToProp)(Projects)
