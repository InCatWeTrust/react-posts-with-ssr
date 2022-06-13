import React, { useEffect } from "react"
import './main.global.scss'
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { UserContextProvider } from "./shared/context/userContext"
import { useDispatch } from 'react-redux'
import { saveToken } from "./reducers/tokenSlice"
import { AppDispatch } from "./store"
import { Redirect, Route, Switch } from "react-router-dom"
import { Post } from "./shared/Post"
import { NotFound } from "./shared/NotFound"

export function AppComponent () {
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(() => {
    dispatch(saveToken())
  }, [])

  return (
    <UserContextProvider>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Redirect exact to="/posts" from="/" />
            <Redirect to="/posts" from="/auth" />
            <Route exact path="/posts">
              <CardsList />
            </Route>
            <Route path="/posts/:id">
              <CardsList />
              <Post />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </UserContextProvider>
  )
}
