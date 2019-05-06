import React, { Component } from 'react'
import axios from 'axios'

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
          event.target.style.display = "none";
          document.querySelector('#p-demo').src = this.state.project['p-demo'];
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
    e.target.parentElement.parentElement.style.display = "none"
    document.getElementById('p-demo').src = this.state.project['p-demo']
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
            null:
            <div id="project">
            <div id="project-content">
              <span id="close" onClick={this.closePopUp}>&times;</span>
              <h2 id="p-title">{project['p-title']}</h2>
              <iframe id="p-demo" title={project['p-title']} src={project['p-demo']} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
              <dl>
                <dt><h4>Description:</h4></dt>
                <dd id="p-desc">
                  {
                    project['p-desc'].map((desc, idx) => <p key={idx}>{desc}</p>)
                  }
                </dd>
                <dt><h4>Highlights: </h4></dt>
                <dd>
                  <ul id="p-high">
                    {
                      project['p-high'].map((highl, idx) => <li key={idx}>{highl}</li>)
                    }
                  </ul>
                </dd>
              </dl>
              <a id="p-repo" href={project['p-repo']}>See Repository</a>
            </div>
          </div>
          }
        </div>
        {errorMsg ? <p>{errorMsg}</p>: null}
      </div>
    )
  }
}
