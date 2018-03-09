import React, { Fragment, Component } from 'react'

import './_NavBar.scss'

export default class NavBar extends Component {
  constructor (content) {
    super(content)

    this.state = {
      menuActive: false
    }
    this.content = content
    this.changeMenuState = this.changeMenuState.bind(this)
  }

  changeMenuState () {
    this.setState((currentState) => {
      return {menuActive: !currentState.menuActive}
    })
  }

  render () {
    const states = {
      menuActive: this.state.menuActive ? 'nav-bar__list--active' : ''
    }
    return (
      <nav className='nav-bar'>
        <span className='nav-bar__menu'>
          <button className='nav-bar__menu__button' onClick={this.changeMenuState}>
            <div className={`nav-bar__menu__button-first ${this.state.menuFirstArrowActive}`} />
            <div className='nav-bar__menu__button-middle' />
            <div className={`nav-bar__menu__button-last ${this.state.menuLastArrowActive}`} />
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
                    <div className='nav-bar__list-container'
                      ref={(navBarContainer) => { this.navbarContainer = navBarContainer }}
                    >
                      <li className='nav-bar__list-item'>{element.label}
                        <ul className='nav-bar__dropdown-list' >
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
                        <span className='nav-bar__arrow-container-item' />
                        <span className='nav-bar__arrow-container-item' />
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
