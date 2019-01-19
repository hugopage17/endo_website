import React, { Component } from 'react';

class Requirements extends Component {
  render() {
    return (
      <div id='requirements'>
        <div id='req_wrapper'>
          <h2 class="mt-4">System Requirements</h2>
          <div class="row mb-3" id='req'>
            <div class="col-4 themed-grid-col">Windows 10</div>
          </div>
          <div class="row mb-3" id='req'>
            <div class="col-sm-4 themed-grid-col">Python 3 <a href='https://www.python.org/' target='_blank'>https://www.python.org/</a></div>
          </div>
          <div class="row mb-3" id='req'>
            <div class="col-sm-4 themed-grid-col">Nodejs (to run the desktop template) <a href='https://nodejs.org/en/' target='_blank'>https://nodejs.org/en/</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Requirements;
