import React, { Component } from 'react'
import ProjectPopUp from './ProjectPopUp'

export default class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       project_list: require('../projects/project_list.json'), 
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
      project: require('../projects/' + e.target.alt + '.json')
    })
  }

  closePopUp = e => {
    this.setState({
      project: {}
    })
  }

  render() {
    const { project_list, project } = this.state;
    
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
