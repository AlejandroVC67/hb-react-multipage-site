import React, { Fragment, Component } from 'react'

import '../NavBar/_NavBar.scss'

export default class DropDownList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dropDownActive: false
    }
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  handleDropdown (event) {
    this.setState((currentState) => {
      return {dropDownActive: !currentState.dropDownActive}
    })
    console.log(this)
    // this.props.callback(this.props.ref)
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
          <div className='nav-bar__list-container' onClick={this.handleDropdown}>
            <li className='nav-bar__list-item'>{this.props.data.label}
              <ul className={`nav-bar__dropdown-list ${states.dropDownActive}`}>
                {
                  this.props.data.links.map(subelement => {
                    return (
                      <li>
                        <a href={subelement.href}> {subelement.label} </a>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            <span className='nav-bar__arrow-container'>
              <span className={`nav-bar__arrow-container-item  ${states.dropDownFirstArrow}`} />
              <span className={`nav-bar__arrow-container-item ${states.dropDownLastArrow} `} />
            </span>
          </div>
        }
      </Fragment>
    )
  }
}
