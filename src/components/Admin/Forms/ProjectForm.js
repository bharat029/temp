import React, { Component } from 'react'
import { storage } from '../../../config/fbconfig'

class ProjectForm extends Component {
  constructor(props) {
    super(props)
  
    this.img = null
    this.url = ''
  }

  changeHandler = e => {
    this.img = e.target.files[0]
  }

  submitHnadler = e => {
    e.preventDefault()

    let project = {
      createdOn: new Date()
    }

    e.target.childNodes.forEach(ele => {
      if(ele.id !== 'submit' && ele.childNodes[1].id !== 'img'){
        project[ 'p-' + ele.childNodes[1].id] = ele.childNodes[1].value
      }
    })

    
    if(this.img){
      const img = this.img
      const uploadTask = storage.ref("imgs/" + project['p-title'] + ".png").put(img)
  
      uploadTask.on('state_changed', 
      snapshot => {

      },
      error => {
        console.log(error)
      },
      () => {
          storage.ref('imgs').child(project['p-title'] + ".png").getDownloadURL().then( url => {
            console.log(url)
            project['p-img'] = url
            
            if(this.props.project){
              project['p-title'] = this.props.project['p-title']
              this.props.update(project, this.props.project.id) 
            } else {
              this.props.add(project)
            }
          })
        })
      } else {
        if(this.props.project){
          project['p-img'] = this.props.project['p-img']
          project['p-title'] = this.props.project['p-title']
          this.props.update(project, this.props.project.id) 
        } else {
          project['p-img'] = "https://firebasestorage.googleapis.com/v0/b/personalwebsite-118af.appspot.com/o/imgs%2Fplaceholder.png?alt=media&token=5c411709-7fe6-40ee-9848-1b03e6943a2d"
          this.props.add(project)
        }
    }

    this.props.changeView(e)
  }
  

  render() {
    const { project } = this.props

    return (
      <form method="post" onSubmit={ this.submitHnadler } className="col-md-5 m-5" action="">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" placeholder="Project TItle" defaultValue={project && project['p-title']} name="title" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="img">Project Image:</label>
          <input type="file" onChange={ this.changeHandler } className="form-control" name="img" id="img" />
        </div>
        <div className="form-group">
          <label htmlFor="demo">Demo Video:</label>
          <input type="text" className="form-control" placeholder="Demo Video Code" defaultValue={project && project['p-demo']} name="demo" id="demo" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-1">Description 1:</label>
          <input type="text" className="form-control" placeholder="First Paragraph Description" defaultValue={project && project['p-desc-1']} name="desc-1" id="desc-1" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-2">Description 2:</label>
          <input type="text" className="form-control" placeholder="Second Paragraph Description" defaultValue={project && project['p-desc-2']} name="desc-2" id="desc-2" />
        </div>
        <div className="form-group">
          <label htmlFor="desc-3">Description 3:</label>
          <input type="text" className="form-control" placeholder="Third Paragraph Description" defaultValue={project && project['p-desc-3']} name="desc-3" id="desc-3" />
        </div>
        <div className="form-group">
          <label htmlFor="high-1">Highlight 1:</label>
          <input type="text" className="form-control" placeholder="First Point of Highlights" defaultValue={project && project['p-high-1']} name="high-1" id="high-1" />
        </div>
        <div className="form-group">
          <label htmlFor="high-2">Highlight 2:</label>
          <input type="text" className="form-control" placeholder="Second Point of Highlights" defaultValue={project && project['p-high-2']} name="high-2" id="high-2" />
        </div>
        <div className="form-group">
          <label htmlFor="high-3">Highlight 3:</label>
          <input type="text" className="form-control" placeholder="Third Point of Highlights" defaultValue={project && project['p-high-3']} name="high-3" id="high-3" />
        </div>
        <div className="form-group">
          <label htmlFor="high-4">Highlight 4:</label>
          <input type="text" className="form-control" placeholder="Fourth Point of Highlights" defaultValue={project && project['p-high-4']} name="high-4" id="high-4" />
        </div>
        <div className="form-group">
          <label htmlFor="high-5">Highlight 5:</label>
          <input type="text" className="form-control" placeholder="Fifth Point of Highlights" defaultValue={project && project['p-high-5']} name="high-5" id="high-5" />
        </div>
        <div className="form-group">
          <label htmlFor="repo">Repository Link:</label>
          <input type="text" className="form-control text-black" placeholder="Repository Link" defaultValue={project && project['p-repo']} name="repo" id="repo" />
        </div>
        <div id='submit' className="form-group col-12 text-center">
            <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-md-4 col-6">{ project ? "Update" : "Submit" }</button>
        </div>
      </form>
    )
  }
}

export default ProjectForm
