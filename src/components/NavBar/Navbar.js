import React, { Fragment, Component } from 'react'

import DropDownList from '../DropDownList/DropDownList'

import './_NavBar.scss'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuActive: false,
      dropDowns: [],
      currentDropDown: {}
    }
    this.changeMenuState = this.changeMenuState.bind(this)
  }

  changeMenuState () {
    this.setState((currentState) => {
      return {menuActive: !currentState.menuActive}
    })
  }

  controlDropDown (dropDown) {
    console.log(this, 'este es el this')
    console.log(dropDown, 'este es el dropdown clickeado')
  }

  render () {
    const states = {
      menuActive: this.state.menuActive ? 'nav-bar__list--active' : '',
      menuFirstArrow: this.state.menuActive ? 'nav-bar__menu__button-first--active' : '',
      menuLastArrow: this.state.menuActive ? 'nav-bar__menu__button-last--active' : ''
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
          <a className='nav-bar__image-link' href={this.props.content.logo.link}>
            <img className='nav-bar__image' src={this.props.content.logo.img} alt='company logo' />
          </a>
        </div>
        <ul className={`nav-bar__list ${states.menuActive}`}>
          {
            this.props.content.links.map(element => {
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
                    <DropDownList data={element} ref={(dropDown) => { this.state.dropDowns = [...this.state.dropDowns, dropDown] }} callback={this.controlDropDown.bind(this.state.dropDowns)} />
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
