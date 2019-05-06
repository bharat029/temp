/* eslint-disable */
import React, {Component} from 'react';
import './bootstrap-grid.min.css';
import './App.css';
import MainContent from './MainContent'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      section: "aboutme"
    }
  }

  chaneSection = (e) => {
    e.preventDefault();

    this.setState({
      section: e.target.id
    })

    document.querySelector('#wrapper').classList.remove('menuDisplayed')
  }
  
  render() {
    return (
      <>
        <div className="col-md-3 d-md-block" alt="Kunjal Pangchal" id="sidebar">
          <div id="me" className="row">
            <img src="imgs/me.jpeg" alt="Kunjal Panchal" />
            <h1>Kunjal Panchal</h1>
            <p>Computer Science Major</p>
          </div>
          <div id="navi" className="row">
            <ul className="navi">
              <li>
                { 
                  this.state.section === 'aboutme' ?  
                  <a id="aboutme" className="navi-item show-active" onClick={this.chaneSection} href="#">About me</a> : 
                  <a id="aboutme" className="navi-item" onClick={this.chaneSection} href="#">About me</a>
                }
              </li>
              <li>
                { 
                    this.state.section === 'projects' ?  
                    <a id="projects" className="navi-item show-active" onClick={this.chaneSection} href="#">Projects</a> : 
                    <a id="projects" className="navi-item" onClick={this.chaneSection} href="#">Projects</a>
                }
              </li>
              <li>
                { 
                    this.state.section === 'cv' ?  
                    <a id="cv" className="navi-item show-active" onClick={this.chaneSection} href="#">CV</a> :
                    <a id="cv" className="navi-item" onClick={this.chaneSection} href="#">CV</a>
                }
              </li>
            </ul>
          </div>
          <div id="contact" className="row">
            <ul className="contact-info">
              <li>
                <a href="mailto:kunjalspanchal@gmail.com" className="fa fa-envelope-square"></a>
              </li>
              <li>
                <a href="https://in.linkedin.com/in/kunjal-panchal-07a0b514b" className="fa fa-linkedin"></a>
              </li>
              <li>
                <a href="https://github.com/astuary" className="fa fa-github"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9" id="main-content">
          <MainContent name={this.state.section}></MainContent>
        </div>
      </>
    );
  }
}

export default App;
