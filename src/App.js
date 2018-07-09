import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import  { Routes } from './routers/route'; 
import  Header from './components/header';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
	        <div className="container">
	         	<Header/>
	         	<Routes/>
	        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
