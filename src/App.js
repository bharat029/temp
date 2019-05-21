import React, {Component} from 'react';
import './App.css';
import SideBar from './components/SideBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Aboutme from './components/AboutMe'
import Projects from './components/Projects'
import Cv from './components/CV'
import Admin from './components/Admin/Admin'

class App extends Component {
  toggleSidebar = (e) => {
    setTimeout(() => {
      document.getElementById('wrapper').classList.toggle("menuDisplayed");
    }, 250);
  }

  render() {
    return (
      <>
        <Router>
          <SideBar />
          <div className="col-md-9" id="main-content">
            <Route exact path="/" component={Aboutme} />
            <Route path="/projects" component={Projects} />
            <Route path="/cv" component={Cv} />
            <Route path="/admin" component={Admin} />            
            <br /><br /><br />
          </div>
          <button className="d-md-none" onClick={this.toggleSidebar} id="toggle-menu"><i className="fa fa-bars"></i></button>
        </Router>
      </>
    );
  }
}

export default App;
