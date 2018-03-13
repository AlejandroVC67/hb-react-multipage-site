import React, { Fragment, Component } from 'react'

import './_NavBar.scss'

export default class NavBar extends Component {
  constructor (content) {
    super(content)

    this.state = {
      menuActive: false,
      dropDownActive: false
    }
    this.content = content
    this.changeMenuState = this.changeMenuState.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  changeMenuState () {
    this.setState((currentState) => {
      return {menuActive: !currentState.menuActive}
    })
  }

  handleDropdown (event) {
    this.setState((currentState) => {
      return {dropDownActive: !currentState.dropDownActive}
    })
  }
  render () {
    const states = {
      menuActive: this.state.menuActive ? 'nav-bar__list--active' : '',
      menuFirstArrow: this.state.menuActive ? 'nav-bar__menu__button-first--active' : '',
      menuLastArrow: this.state.menuActive ? 'nav-bar__menu__button-last--active' : '',
      dropDownActive: this.state.dropDownActive ? 'nav-bar__dropdown-list--active' : '',
      dropDownFirstArrow: this.state.dropDownActive ? 'rightArrow--active' : '',
      dropDownLastArrow: this.state.dropDownActive ? 'leftArrow--active' : ''
    }
    return (
      <nav className='nav-bar'>
        <span className='nav-bar__menu'>
          <button className='nav-bar__menu__button' onClick={this.changeMenuState}>
            <div className={`nav-bar__menu__button-first ${states.menuFirstArrow}`} />
            <div className='nav-bar__menu__button-middle' />
            <div className={`nav-bar__menu__button-last ${states.menuLastArrow}`} />
          </button>
        </span>
        <div className='nav-bar__image__container'>
          <a className='nav-bar__image-link' href={this.content.content.logo.link}>
            <img className='nav-bar__image' src={this.content.content.logo.img} alt='company logo' />
          </a>
        </div>
        <ul className={`nav-bar__list ${states.menuActive}`}>
          {
            this.content.content.links.map(element => {
              if (element.hasOwnProperty('href')) {
                return (
                  <div>
                    <li className='nav-bar__list-item'>
                      <a className='nav-bar__list-item-element' href={element.href}>{element.label}</a>
                    </li>
                  </div>
                )
              } else {
                return (
                  <Fragment>
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
                  </Fragment>
                )
              }
            })
          }
        </ul>
      </nav>
    )
  }
}
