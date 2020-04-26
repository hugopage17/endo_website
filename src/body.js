import React, { Component } from 'react';
import web_shot from './web_shot.PNG'
import app_shot from './app_shot.PNG'
import Endo from './Endo.exe'

class Body extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div id='body_wrapper'>
        <div>
          <a href={Endo} download='Endo.exe'>
            <button id='download_but'>Download for Windows 10
            </button>
          </a>
        </div>
        <div class="row featurette" id='about'>
          <div class="col-md-7">
            <h2 class="featurette-heading">Web Template. <span class="text-muted">A responsive web template design.</span></h2>
            <p class="lead">Fully responsive, customizable web pages preloaded with an index, about and contact page</p>
          </div>
          <div class="col-md-5">
            <img src={web_shot} height={448} id='screenshot'></img>
          </div>
        </div>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">App Template. <span class="text-muted">Build desktop apps faster with the Endo app template</span></h2>
            <p class="lead">Powered by ElectronJS, the Endo web app is the perfect template to get you started with your desktop apps</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src={app_shot} height={448} id='screenshot'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
