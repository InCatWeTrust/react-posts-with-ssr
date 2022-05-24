import React from "react"
import { hot } from "react-hot-loader/root"
import { Provider } from "react-redux"
import { AppComponent } from "./App"
import { store } from './store'

export function AppContainer () {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  )
}

export const App = hot(() => <AppContainer />)
