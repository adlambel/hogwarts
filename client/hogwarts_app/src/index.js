import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
/*
const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000/',
  responseType: 'json'
});
*/
const store = createStore(rootReducer)
/*
const store = createStore(rootReducer, applyMiddleware(
  axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
))
*/

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#242424',
      }
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
      </ThemeProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
