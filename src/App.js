import React, {Component} from 'react';
import './bootstrap-grid.min.css';
import './App.css';
import MainContent from './MainContentComponents/MainContent'
import SideBar from './SideBar'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      section: "aboutme"
    }
  }

  toggleSidebar = (e) => {
    setTimeout(() => {
      document.getElementById('wrapper').classList.toggle("menuDisplayed");
    }, 250);
  }

  changeSection = (sname) => {
    this.setState({
      section: sname
    })

    document.querySelector('#wrapper').classList.remove('menuDisplayed')
  }
  
  render() {
    return (
      <>
        <SideBar section={this.state.section} changeSection={this.changeSection}></SideBar>
        <div className="col-md-9" id="main-content">
          <MainContent name={this.state.section}></MainContent>
        </div>
        <button className="d-md-none" onClick={this.toggleSidebar} id="toggle-menu"><i class="fa fa-bars"></i></button>
      </>
    );
  }
}

export default App;
