import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../AppContainer'

window.addEventListener('load', () => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  
  renderMethod(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('app'))
})
