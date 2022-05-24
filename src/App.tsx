import React, { useEffect } from "react"
import './main.global.scss'
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { UserContextProvider } from "./shared/context/userContext"
import { PostsContextProvider } from "./shared/context/postsContext"
import { useDispatch } from 'react-redux'
import { updateToken } from "./tokenSlice"

export function AppComponent () {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (window.__token__) {
      dispatch(updateToken(window.__token__))
    }
  }, [])

  return (
    <UserContextProvider>
      <Layout>
        <Header />
        <Content>
          <PostsContextProvider>
            <CardsList />
          </PostsContextProvider>
        </Content>
      </Layout>
    </UserContextProvider>
  )
}
