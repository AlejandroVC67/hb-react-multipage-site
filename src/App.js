import React, { Component } from 'react'

import Test from './Test.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <div>
        <Test content={this.props} />
      </div>
    )
  }
}
