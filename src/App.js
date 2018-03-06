import React, { Component } from 'react'

import './scss/_reset.scss'

import NavBar from './components/NavBar/Navbar.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar content={this.props.data.navbar} />
      </div>
    )
  }
}
