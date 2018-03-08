import React, { Fragment } from 'react'

import './_NavBar.scss'

export default function NavBar ({content}) {
  return (
    <nav className='nav-bar'>
      <span className='nav-bar__menu'>
        <button className='nav-bar__menu__button'>
          <div className='nav-bar__menu__button-first' />
          <div className='nav-bar__menu__button-middle' />
          <div className='nav-bar__menu__button-last' />
        </button>
      </span>
      <div className='nav-bar__image__container'>
        <a className='nav-bar__image-link' href={content.logo.link}>
          <img className='nav-bar__image' src={content.logo.img} alt='company logo' />
        </a>
      </div>
      <ul className='nav-bar__list'>
        {
          content.links.map(element => {
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
                  <div className='nav-bar__list-container'>
                    <li className='nav-bar__list-item'>{element.label}
                      <ul className='nav-bar__dropdown-list'>
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
