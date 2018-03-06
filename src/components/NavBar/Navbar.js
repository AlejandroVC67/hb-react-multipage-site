import React from 'react'

import './_NavBar.scss'

export default function NavBar ({content}) {
  console.log(content)
  /*
  const singleLinks = []
  const componsedLinks = content.links.filter((element) => {
    if (element.hasOwnProperty('links')) {
        return element
    }
    else{
      singleLinks.push(element)
    }
  })
  console.log(componsedLinks)
  console.log(singleLinks) */

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
          content.links.forEach(element => {
            if (element.hasOwnProperty('links')) {
              return (
                <div>
                  <li className='nav-bar__list-item'>
                    <a className='nav-bar__list-item-element' href={content.element.href}>{content.element.label}</a>
                  </li>
                </div>
              )
            } else {
              return (
                <div clasName='nav-bar__list-container'>
                  <li className='nav-bar__list-item'>{content.element.label}</li>
                </div>
              )
            }
          })
        }
      </ul>
    </nav>
  )
}
