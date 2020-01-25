import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Fab from '@material-ui/core/Fab'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { connect } from 'react-redux'
import { init } from './actions'

import Home from './components/Home.js';
import AddPoints from './components/AddPoints.js';
import Members from './components/Members.js';


function App({dispatch}) {

  const getPathName = () =>{
    let pathName = window.location.pathname
    if(pathName === "/members"){
      return "Members"
    }
    if(pathName === "/addPoints"){
      return "Add Points"
    }
    else{
      return "Home"
    }
  }

  const [selectedBody, setSelectedBody] = React.useState(getPathName())

  const getHeader = () =>{
    if(selectedBody === "Add Points" || selectedBody === "Members"){
      return (
        <div className="headerButtonsContainer">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {setSelectedBody("Home")}}>
              Home
              <NavigateNextIcon />
            </Fab>
          </Link>
        </div>
      )
    }
    else{
      return (
        <div className="headerButtonsContainer">
          <Link to="/addPoints" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {setSelectedBody("Add Points")}}>
              Add Points
              <NavigateNextIcon />
            </Fab>
          </Link>
          <Link to="/members" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {setSelectedBody("Members")}}>
              Members
              <NavigateNextIcon />
            </Fab>
          </Link>
        </div>
      )
    }

  }

  return (
    <Router>
      <div className="App">

          <div className="header center">
            <div className="heardeName harryFontFamily center">{selectedBody}</div>
              {getHeader()}
          </div>

          <Route exact path="/home" component={Home} onEnter={dispatch(init())}/>
          <Route path="/addPoints" component={AddPoints} onEnter={dispatch(init())}/>
          <Route path="/members" component={Members} onEnter={dispatch(init())}/>

      </div>
    </Router>
  );
}


export default connect() (App)

/*
class App extends Component {
  constructor({dispatch}) {
    super();
    this.state = {selectedBody: "home"};
  }

   getHeader = () => {
    if(this.state.selectedBody === "Add Points" || this.state.selectedBody === "Members"){
      return (
        <div className="headerButtonsContainer">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {this.setState({selectedBody: "Home"})}}>
              Home
              <NavigateNextIcon />
            </Fab>
          </Link>
        </div>
      )
    }

    else{
      return (
        <div className="headerButtonsContainer">
          <Link to="/addPoints" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {this.setState({selectedBody: "Add Points"})}}>
              Add Points
              <NavigateNextIcon />
            </Fab>
          </Link>
          <Link to="/members" style={{ textDecoration: 'none' }}>
            <Fab className="button" variant="extended" onClick={() => {this.setState({selectedBody: "Members"})}}>
              Members
              <NavigateNextIcon />
            </Fab>
          </Link>
        </div>
      )
    }

  }

  render() {
    return(
    <Router>
      <div className="App">

          <div className="header center">
            <div className="heardeName harryFontFamily center">{this.state.selectedBody}</div>
              {this.getHeader()}
          </div>

          <Route exact path="/home" component={Home} />
          <Route path="/addPoints" component={AddPoints} />
          <Route path="/members" component={Members} />

      </div>
    </Router>
    )
  };
}
*/