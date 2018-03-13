import React, { Fragment, Component } from 'react'

import '../NavBar/_NavBar.scss'

export default class DropDownList extends Component {
  constructor (data) {
    super(data)
    this.state = {
      dropDownActive: false
    }
    this.data = data
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  handleDropdown (event) {
    this.setState((currentState) => {
      return {dropDownActive: !currentState.dropDownActive}
    })
  }

  render () {
    const states = {
      dropDownActive: this.state.dropDownActive ? 'nav-bar__dropdown-list--active' : '',
      dropDownFirstArrow: this.state.dropDownActive ? 'rightArrow--active' : '',
      dropDownLastArrow: this.state.dropDownActive ? 'leftArrow--active' : ''
    }
    return (
      <Fragment>
        {
          this.data.data.map(element => {
            if (!element.hasOwnProperty('href')) {
              return (
                <ul className={`nav-bar__dropdown-list ${states.dropDownActive}`}>
                  {
                    element.links.map(subelement => {
                      return (
                        <li>
                          <a href={subelement.href}> {subelement.label} </a>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            }
          })
        }
      </Fragment>
    )
  }
}
