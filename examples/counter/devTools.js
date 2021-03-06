import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';
import {provide} from 'angular2/core';

let devTools = provide('devTools', {useFactory: () => {
    return {
      start: (ngRedux) => {
        startDevTools(ngRedux);
      }
    };
  }});

export default devTools;

function startDevTools(ngRedux) {
  React.render(
    <DevToolsReactComponent store={ ngRedux }/>,
    document.getElementById('devTools')
  );
}

class DevToolsReactComponent extends Component {
  render() {
    return (
      <div>
        <DebugPanel top right bottom>
          <DevTools store={ this.props.store } monitor = { LogMonitor } />
        </DebugPanel>
      </div>
    );
  }
}
