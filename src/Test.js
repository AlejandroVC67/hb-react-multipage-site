import React from 'react'

import './scss/test.scss'

export default function Test ({content}) {
  return (
    <div className={content.data.className}> {content.data.description} </div>
  )
}
