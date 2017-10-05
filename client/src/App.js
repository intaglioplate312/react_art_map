import React, { Component } from 'react';
// import MediaDropdown from './components/MediaDropdown';
import './App.css';
// import NavBar from './components/NavBar';
import WholeNavBar from './components/WholeNavBar';
import UploadForm from './components/UploadForm';
import Form from './components/Form/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WholeNavBar/>
        <Form />
      </div>
    ); 
  }
}

export default App;
