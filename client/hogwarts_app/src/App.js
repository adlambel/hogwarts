import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home.js';

const store = createStore(rootReducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
