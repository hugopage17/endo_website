import React, { Component } from 'react';
import Logo from './endo_logo.png'

class Top_Header extends Component{
  render(){
    return(
      <div id='top_intro'>
        <img src={Logo}/>

        <div id='intro_text'>
          <p class="lead">
            Develop websites and Desktop apps faster with Endo
          </p>
          <p class="lead mb-4" id='intro_para'>
            A toolkit for developing with HTML & CSS. Quickly import the Endo web or app template and have a prebuilt responsive design ready.
          </p>
        </div>
      </div>
    )
  }
}

export default Top_Header
