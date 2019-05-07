import React, { Component } from 'react'
import axios from 'axios'

export default class CV extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cv: {},
       errorMsg: ''
    };
  }

  getStr(data, first) {
    var res = "<dl>";
    for(let key in data){
      if(!first){
        res += "<li>";
      }
      
      if(Array.isArray(data[key])){
        if(key === "Softwares Games") {
          res += "<dt><i class='fa fa-gamepad'></i> " + key + "</dt><dd><ul>" + this.getUlStr(data[key]) + "<ul></dd>";
        } else {
          res += "<dt>" + key + "</dt><dd><ul>" + this.getUlStr(data[key]) + "<ul></dd>";
        }
      } else if(typeof data[key] === "string"){
        res += "<dt>" + key + "</dt><dd><ul>" + data[key] + "<ul></dd>";
      } else {
        if(key === "Education") {
          res += "<dt><i class='fa fa-graduation-cap'></i> " + key + "</dt><dd><ul>" + this.getStr(data[key]) + "<ul></dd>";
        } else if(key === "Certificates") {
          res += "<dt><i class='fa fa-drivers-license-o	'></i> " + key + "</dt><dd><ul>" + this.getStr(data[key]) + "<ul></dd>";
        } else if(key === "Interests") {
          res += "<dt><i class='fa fa-street-view'></i> " + key + "</dt><dd><ul>" + this.getStr(data[key]) + "<ul></dd>";
        } else {
          res += "<dt>" + key + "</dt><dd><ul>" + this.getStr(data[key]) + "<ul></dd>";
        }
      }
  
      if(!first){
        res += "</li>";
      }
    }
    return res + "</dl>";
  }
  
  getUlStr (arr) {
    var res = "<ul>";
  
    for(let ele of arr){
      res += "<li>" + ele + "</li>"
    }
    return res + "</ul>";
  }
  
  componentDidMount = () => {
  axios.get('pages/cv.json')
    .then((result) => {
      this.setState({
        cv: result.data
      })
    }).catch((err) => {
      this.setState({
        errorMsg: 'Error retriving data'
      })
    })   
  }   
  
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }
  
  render() {
    return (
      <div className="page">
        <h2 id="page-title">CV</h2>
        {
          this.isEmpty(this.state.cv) ?
          <div className="loading"></div>:
          <div id="page-content" dangerouslySetInnerHTML={{__html: `<div id='cv'> ${this.getStr(this.state.cv, true)} <br><br><br><br><br><br><div style='position: relative;'><a href='files/Resume.pdf' class='btn btn-primary' target='_blank'><i class='fa fa-download'></i> Download CV</a></div></div>`}}></div>
        }
        <br></br><br></br>
        {this.state.errorMsg ? <p>{this.state.errorMsg}</p>: null}
      </div>
    )
  }
}
