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
  }

  render () {
    console.log(this.props)
    const states = {
      dropDownActive: this.state.dropDownActive ? 'nav-bar__dropdown-list--active' : '',
      dropDownFirstArrow: this.state.dropDownActive ? 'rightArrow--active' : '',
      dropDownLastArrow: this.state.dropDownActive ? 'leftArrow--active' : ''
    }
    /*
    return (
      <Fragment>
        {
          this.props.data.map(element => {
            if (!element.hasOwnProperty('href')) {
              console.log(element)
              return (
                <div className='nav-bar__list-container' onClick={this.handleDropdown}>
                  <li className='nav-bar__list-item'>{element.label}
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
                  </li>
                  <span className='nav-bar__arrow-container'>
                    <span className={`nav-bar__arrow-container-item  ${states.dropDownFirstArrow}`} />
                    <span className={`nav-bar__arrow-container-item ${states.dropDownLastArrow} `} />
                  </span>
                </div>
              )
            }
          })
      }
      </Fragment>
    ) */
  }
}
