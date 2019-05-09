import React from 'react'
import { connect } from 'react-redux'

const CV = ({ cv }) => {
  function getStr(data, first) {
    var res = "<dl>";
    for(let key in data){
      if(!first){
        res += "<li>";
      }
      
      if(Array.isArray(data[key])){
        if(key === "Softwares Games") {
          res += "<dt><i class='fa fa-gamepad'></i> " + key + "</dt><dd><ul>" + getUlStr(data[key]) + "<ul></dd>";
        } else {
          res += "<dt>" + key + "</dt><dd><ul>" + getUlStr(data[key]) + "<ul></dd>";
        }
      } else if(typeof data[key] === "string"){
        res += "<dt>" + key + "</dt><dd><ul>" + data[key] + "<ul></dd>";
      } else {
        if(key === "Education") {
          res += "<dt><i class='fa fa-graduation-cap'></i> " + key + "</dt><dd><ul>" + getStr(data[key]) + "<ul></dd>";
        } else if(key === "Certificates") {
          res += "<dt><i class='fa fa-drivers-license-o	'></i> " + key + "</dt><dd><ul>" + getStr(data[key]) + "<ul></dd>";
        } else if(key === "Interests") {
          res += "<dt><i class='fa fa-street-view'></i> " + key + "</dt><dd><ul>" + getStr(data[key]) + "<ul></dd>";
        } else {
          res += "<dt>" + key + "</dt><dd><ul>" + getStr(data[key]) + "<ul></dd>";
        }
      }
  
      if(!first){
        res += "</li>";
      }
    }
    return res + "</dl>";
  }
  
  function getUlStr (arr) {
    var res = "<ul>";
  
    for(let ele of arr){
      res += "<li>" + ele + "</li>"
    }
    return res + "</ul>";
  }

  return (
    <div className="page">
      <h2 id="page-title">CV</h2>
      <div id="page-content">
        <div id='cv' dangerouslySetInnerHTML={{__html: getStr(cv, true)}} />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div id='download-btn-container'>
          <a href={require('../files/Resume.pdf')} rel="noopener noreferrer" className='btn btn-primary' target='_blank'>
            <i className='fa fa-download'></i> Download CV
          </a>
        </div>
      </div>
      <br></br><br></br>
    </div>
  )
}

const mapStateToProp = (state) => {
  return {
    cv: state.cv
  }
}

export default connect(mapStateToProp)(CV)
