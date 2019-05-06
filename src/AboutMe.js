import React, { Component } from 'react'
import axios from 'axios'

export default class AboutMe extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       aboutme: [],
       errorMsg: ''
    };
  }

  componentDidMount = () => {
    axios.get('pages/aboutMe.json')
      .then((result) => {
        this.setState({
          aboutme: result.data
        })
      }).catch((err) => {
        this.setState({
          errorMsg: 'Error retriving data'
        })
      })
  } 

  render() {
    const { aboutme, errorMsg } = this.state;
    
    return (
      <div className="page">
        <h2 id="page-title">About Me</h2>
        <div id="page-content">
          {
            aboutme.length ?
            aboutme.map((abtme, idx) => <p key={idx}>{abtme}</p>):
            <div className="loading"></div>
          }
        </div>
        <br></br>
        <p>E-mail:  <a id="email" href="mailto:kunjalspanchal@gmail.com">kunjalspanchal@gmail.com</a></p>
        <br></br>
        {errorMsg ? <p>{errorMsg}</p>: null}
      </div>
    )
  }
}
