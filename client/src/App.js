import React, { Component } from 'react';
import MediaDropdown from './components/MediaDropdown';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
// import Map from './components/Map';
import Footer from './components/Footer';
import Form from "./components/Form";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar></NavBar>
        <MediaDropdown></MediaDropdown>
        <Header></Header>
        {/* <Map></Map> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
