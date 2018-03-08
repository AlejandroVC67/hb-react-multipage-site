import React, { Component, Fragment } from 'react'

import './scss/_reset.scss'

import NavBar from './components/NavBar/Navbar.js'

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <NavBar content={this.props.data.navbar} />
      </Fragment>
    )
  }
}
