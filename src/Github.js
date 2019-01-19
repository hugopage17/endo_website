import React, { Component } from 'react'
import github from './github.png'
import Logo from './endo_logo.png'

class Github extends Component{

  render(){
    return(
      <div id='github'>
        <div>
          <h1>Sync all your projects with <span class='grey_color'>Github</span></h1>
          <p class="lead my-3">Upload your project to your github account as a new repository</p>
          <p class='git_img'><img src={github} width={140} style={{marginRight:20}}/>
          <img src={Logo} width={140}/></p>
        </div>
      </div>
    )
  }
}

export default Github
