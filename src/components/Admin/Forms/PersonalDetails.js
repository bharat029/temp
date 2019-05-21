import React from 'react'
import { updatePersonalDetails } from '../../../store/actions/personal_detailsActions'
import { connect } from 'react-redux'
import { storage } from '../../../config/fbconfig'

const PersonalDetails = ({ details, edits, updatePersonalDetails }) => {
  let img
  let resume

  const imgChangeHandler = e => {
    img = e.target.files[0]
  }

  const resumeChangeHandler = e => {
    resume = e.target.files[0]
  }

  const submitHnadler = e => {
    e.preventDefault()

    let detail = {}

    e.target.childNodes.forEach(ele => {
      if(ele.id !== 'submit' && ele.childNodes[1].id !== 'img' && ele.childNodes[1].id !== 'resume'){
        detail[ele.childNodes[1].id] = ele.childNodes[1].value
      }
    })

    
    if(img){
      const uploadTask = storage.ref("imgs/me.png").put(img)
  
      uploadTask.on('state_changed', 
      snapshot => {

      },
      error => {
        console.log(error)
      },
      () => {
          storage.ref('imgs').child("me.png").getDownloadURL().then( url => {
            console.log(url)
            detail.img = url
          })
      })
    } else {
      detail.img = details.img
    }

    if(resume){
      const uploadTask = storage.ref("files/Resume.pdf").put(resume)
  
      uploadTask.on('state_changed', 
      snapshot => {

      },
      error => {
        console.log(error)
      },
      () => {
          storage.ref('files').child("Resume.pdf").getDownloadURL().then( url => {
            console.log(url)
            detail.resume = url
            updatePersonalDetails(detail)
          })
      })
    } else {
      detail.resume = details.resume
      updatePersonalDetails(detail)
    }

    edits(e)
  }

  return (
    <form method="post" onSubmit={submitHnadler} className="col-5 m-5" action="">
      <div className="form-group">
        <label htmlFor="fname">First Namee:</label>
        <input type="text" className="form-control" placeholder="First Name" defaultValue={details['fname']} name="fname" id="fname" />
      </div>
      <div className="form-group">
        <label htmlFor="lname">Last Namee:</label>
        <input type="text" className="form-control" placeholder="Last Name" defaultValue={details['lname']} name="lname" id="lname" />
      </div>
      <div className="form-group">
        <label htmlFor="img">Your Img:</label>
        <input type="file" className="form-control" onChange={imgChangeHandler} name="img" id="img" />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Description:</label>
        <input type="text" className="form-control" placeholder="One Line Description" defaultValue={details['desc']} name="desc" id="desc" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" placeholder="Email" defaultValue={details['email']} name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">Linkedin:</label>
        <input type="text" className="form-control" placeholder="Linkedin Link" defaultValue={details['linkedin']} name="linkedin" id="linkedin" />
      </div>
      <div className="form-group">
        <label htmlFor="github">GitHub:</label>
        <input type="text" className="form-control" placeholder="GitHub Link" defaultValue={details['github']} name="github" id="github" />
      </div>
      <div className="form-group">
        <label htmlFor="resume">Resume:</label>
        <input type="file" className="form-control" onChange={resumeChangeHandler} name="resume" id="resume" />
      </div>
      <div id='submit' className="form-group col-12 text-center">
          <button type="submit" className="btn btn-success pl-0 pr-0 text-center col-4">Update</button>
      </div>
    </form>
  )
}

const mapDispatchToProp = dispatch => {
  return {
    updatePersonalDetails: details => dispatch(updatePersonalDetails(details))
  }
}


export default connect(null, mapDispatchToProp)(PersonalDetails)
