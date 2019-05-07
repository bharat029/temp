import React, { Component } from 'react'
import axios from 'axios'
import ProjectPopUp from './ProjectPopUp'

export default class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       project_list: [],
       project: {},
       errorMsg: ''
    };
  }

  componentDidMount = () => {
    axios.get('projects/project_list.json')
      .then((result) => {
        this.setState({
          project_list: result.data
        })
      }).catch((err) => {
        this.setState({
          errorMsg: 'Error retriving data'
        })
      })

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
    axios.get('projects/' + e.target.alt + '.json')
    .then((result) => {
      this.setState({
        project: result.data
      })
      document.getElementById('project').style.display = 'block'
    }).catch((err) => {
      this.setState({
        errorMsg: 'Error retriving data'
      })
    })
  }

  closePopUp = e => {
    this.setState({
      project: {}
    })
  }

  getBtns(proj, idx) {
    let imgsrc = 'imgs/' + proj + '.jpg';
    return <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-12"><img className="project-button mx-auto my-auto" onClick={this.btnClick} src={imgsrc} alt={proj} /></div>
  }

  render() {
    const { project_list, project, errorMsg } = this.state;
    
    return (
      <div className="page">
        <h2 id="page-title">Project Section</h2>
        <div id="page-content">
          {
            (project_list.length) ? 
            <div id="proj-wrapper" className="row no-gutters">
              {project_list.map((proj, idx) => this.getBtns(proj, idx))}
            </div>:
            <div className="loading"></div>
          }
          {
            this.isEmpty(project) ? 
            null:<ProjectPopUp project={project} closePopUp={this.closePopUp} />
          }
        </div>
        {errorMsg ? <p>{errorMsg}</p>: null}
      </div>
    )
  }
}
