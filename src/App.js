import React, { Component } from 'react'

import Test from './Test.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <Test content={this.props} />
      </div>
    )
  }
}
