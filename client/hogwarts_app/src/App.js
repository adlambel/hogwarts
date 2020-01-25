import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Fab from '@material-ui/core/Fab'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { initPoints } from './actions'

import Home from './components/Home.js';
import AddPoints from './components/AddPoints.js';
import Members from './components/Members.js';


function App({dispatch}) {

  const [selectedBody, setSelectedBody] = React.useState("home")

  const getHeader = () =>{
    if(selectedBody === "Add Points" || selectedBody === "Members"){
      return (
        <div className="headerButtonsContainer">
          <Link to="/home" style={{ textDecoration: 'none' }}>
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

          <Route exact path="/home" component={Home} onEnter={dispatch.initPoints()}/>
          <Route path="/addPoints" component={AddPoints} />
          <Route path="/members" component={Members} />

      </div>
    </Router>
  );
}


export default App
