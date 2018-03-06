import React from 'react'

import './scss/test.scss'

export default function Test ({content}) {
  return (
    <div className='test-div'> {content.data.description} </div>
  )
}
