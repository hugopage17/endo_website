import React, { Component } from 'react';
import Logo from './endo_logo.png'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div id='nav_menu'>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#"><img src={Logo} width={32}/></a>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Download<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#documentation">Documentation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#requirements">Requirements</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
