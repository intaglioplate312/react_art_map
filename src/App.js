import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WholeNavBar from './components/WholeNavBar';
import RegisterModal from './components/uncontrolledForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WholeNavBar/>
        <uncontrolledForm/>
        <RegisterModal/>
       
      </div>
    );
  }
}

export default App;
