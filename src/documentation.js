import React, { Component } from 'react';

class Documentation extends Component {
  render() {
    return (
      <div id='documentation'>
        <div>
              <h2 class="border-bottom border-gray pb-2 mb-0">Documentation</h2>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">create project - 'project name'</strong>
                creates a new web project and starts the installer
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">create project - 'app name'</strong>
                creates a new desktop project and starts the installer
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">info</strong>
                displays all technical info about the software
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">start</strong>
                after installation, this command starts the server and deploys the web project
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">run</strong>
                after installation, this command builds the project and deploys the desktop app
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">open - 'directory'</strong>
                opens any endo projects you have been working on
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">upload</strong>
                Uploads your enitre project to your github account as a new repository
              </p>
            </div>
            <div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">quit</strong>
                exits the program
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Documentation;
