import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './header'
import Body from './body'
import Top_Intro from './Top_Intro'
import Requirements from './Requirements'
import Footer from './footer'
import Documentation from './documentation'
import Github from './Github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Top_Intro/>
        <Body/>
        <Github/>
        <Documentation/>
        <Requirements/>
        <Footer/>
      </div>
    );
  }
}

export default App;
