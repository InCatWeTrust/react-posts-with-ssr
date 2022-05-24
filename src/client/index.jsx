import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../AppContainer'

window.addEventListener('load', () => {
  ReactDOM.hydrate(<App />, document.getElementById('app'))
})
