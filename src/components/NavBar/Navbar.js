import React, { Fragment, Component } from 'react'

import './_NavBar.scss'

export default class NavBar extends Component {
  constructor (content) {
    super(content)
    this.content = content
    this.currentDropdown = null
  }

  static get states () {
    return {
      firstArrowActive: `nav-bar__menu__button-first--active`,
      lastArrowActive: `nav-bar__menu__button-last--active`,
      dropDownActive: `nav-bar__dropdown-list--active`,
      leftArrowActive: `leftArrow--active`,
      rightArrowActive: `rightArrow--active`
    }
  }

  setMenuAction (buttonMenu) {
    this.animateMenu()
    console.log('hay comentario acá')
    // this.navbarList.classList.toggle('nav-bar__list--active')
  }

  animateMenu () {
    /*
    this.btnMenuFirstArrow.classList.toggle(NavBar.states.firstArrowActive)
    this.btnMenuLastArrow.classList.toggle(NavBar.states.lastArrowActive) */
    console.log('Acá está comentado')
  }

  /*
  changeArrows (element, index) {
    element.querySelectorAll('.nav-bar__arrow-container-item')[0].classList.toggle(NavBar.states.leftArrowActive)
    element.querySelectorAll('.nav-bar__arrow-container-item')[1].classList.toggle(NavBar.states.rightArrowActive)
  } */

  /*
  setDropDownAction (dropDownTrigger) {
    dropDownTrigger.forEach(element => {
      element.addEventListener('click', () => {
        const index = Array.from(dropDownTrigger).indexOf(element)
        this.changeArrows(element, index)
        if (this.currentDropdown === null) {
          this.currentDropdown = index
        }
        if (index === this.currentDropdown) {
          this.elements.dropDownList[this.currentDropdown].classList.toggle(NavBar.states.dropDownActive)
        } else {
          this.elements.dropDownList[this.currentDropdown].classList.remove(NavBar.states.dropDownActive)
          this.elements.dropDownList[index].classList.add(NavBar.states.dropDownActive)
          this.currentDropdown = index
        }
      })
    })
  } */

  render () {
    return (
      <nav className='nav-bar'>
        <span className='nav-bar__menu'>
          <button className='nav-bar__menu__button'
            ref={(btnMenu) => { this.btnMenu = btnMenu }}
            onClick={this.setMenuAction(this.btnMenu)}>
            <div className='nav-bar__menu__button-first' ref={(btnMenuFirstArrow) => { this.btnMenuFirstArrow = btnMenuFirstArrow }} />
            <div className='nav-bar__menu__button-middle' />
            <div className='nav-bar__menu__button-last' ref={(btnMenuLastArrow) => { this.btnMenuLastArrow = btnMenuLastArrow }} />
          </button>
        </span>
        <div className='nav-bar__image__container'>
          <a className='nav-bar__image-link' href={this.content.content.logo.link}>
            <img className='nav-bar__image' src={this.content.content.logo.img} alt='company logo' />
          </a>
        </div>
        <ul className='nav-bar__list'
          ref={(navBarList) => { this.navbarList = navBarList }} >
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
                        <ul className='nav-bar__dropdown-list' ref={(navBarDropdownList) => { this.navBarDropdownList = navBarDropdownList }} >
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
