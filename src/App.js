import React, {Component} from 'react';
import './bootstrap-grid.min.css';
import './App.css';
import SideBar from './SideBar'
import {HashRouter, Route} from 'react-router-dom'
import Aboutme from './components/AboutMe'
import Projects from './components/Projects'
import Cv from './components/CV'

class App extends Component {
  toggleSidebar = (e) => {
    setTimeout(() => {
      document.getElementById('wrapper').classList.toggle("menuDisplayed");
    }, 250);
  }

  render() {
    return (
      <>
        <HashRouter>
          <SideBar />
          <div className="col-md-9" id="main-content">
          <Route exact path="/" component={Aboutme} />
            <Route path="/projects" component={Projects} />
            <Route path="/cv" component={Cv} />
            <br /><br /><br />
          </div>
          <button className="d-md-none" onClick={this.toggleSidebar} id="toggle-menu"><i className="fa fa-bars"></i></button>
        </HashRouter>
      </>
    );
  }
}

export default App;
