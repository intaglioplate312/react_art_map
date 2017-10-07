import React, { Component } from 'react';
import './App.css';
import WholeNavBar from './components/WholeNavBar';
import AuthModal from './components/AuthModal';
import Form from './components/Form/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WholeNavBar/>
        <Form />
        <AuthModal/>
      </div>
    ); 
  }
}

export default App;
