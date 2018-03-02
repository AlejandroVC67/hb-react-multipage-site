import React from 'react'
import { render } from 'react-dom'

import App from './App'

import properties from './data/data.json'

render(<App data={properties} />, document.getElementById('app'))
