import React from "react"
import { hot } from "react-hot-loader/root"
import { Provider } from "react-redux"
import { AppComponent } from "./App"
import { store } from './store'
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"

export function AppContainer () {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </RecoilRoot>
    </Provider>
  )
}

export const App = hot(() => <AppContainer />)
