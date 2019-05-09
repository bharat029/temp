import React, { Component } from 'react'
import ProjectPopUp from './ProjectPopUp'
import { connect } from 'react-redux'

class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       project: {}
    };
  }

  componentDidMount = () => {
    window.onclick = (event) => {
      if (event.target === document.getElementById('project')) {
        this.closePopUp()
      }
    };    
  } 

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  btnClick = (e) => {
    this.setState({
      project: this.props.project_details.find(project => project['p-title'] === e.target.alt)
    })
  }

  closePopUp = e => {
    this.setState({
      project: {}
    })
  }

  render() {
    const { project_list } = this.props
    const { project } = this.state
    
    return (
      <div className="page">
        <h2 id="page-title">Project Section</h2>
        <div id="page-content">
          <div id="proj-wrapper" className="row no-gutters">
            {project_list.map((proj, idx) => <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12"><img className="project-button" onClick={this.btnClick} src={require('../imgs/' + proj +'.png')} alt={proj} /></div>)}
          </div>
          {
            this.isEmpty(project) ? 
            null:<ProjectPopUp project={project} closePopUp={this.closePopUp} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    project_list: state.project_list,
    project_details: state.project_details
  }
}

export default connect(mapStateToProp)(Projects)
