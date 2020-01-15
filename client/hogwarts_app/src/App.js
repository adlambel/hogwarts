import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';
import AddPoints from './components/AddPoints.js';
import Members from './components/Members.js';


function App({ selectedBody }) {

  let bodySelector = (bodyName) => {
    if(bodyName === "Add points"){
      return <AddPoints />
    }
    if(bodyName === "Members"){
      return <Members />
    }
    else{
      return <Home />
    }
  }

  return (
    <div className="App">
        <Header selectedBody={selectedBody} />
        {bodySelector(selectedBody.firstBody)}
    </div>
  );
}

const mapStateToProps = state => ({
  selectedBody: state.selectedBody
})

export default connect(
    mapStateToProps
  )(App)
