// @flow
import React, { Component } from 'react';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Root
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Root;
