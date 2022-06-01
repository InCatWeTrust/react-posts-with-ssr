import React, { useEffect } from "react"
import './main.global.scss'
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { UserContextProvider } from "./shared/context/userContext"
import { PostsContextProvider } from "./shared/context/postsContext"
import { useDispatch } from 'react-redux'
import { saveToken } from "./reducers/tokenSlice"
import { AppDispatch } from "./store"

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
          <PostsContextProvider>
            <CardsList />
          </PostsContextProvider>
        </Content>
      </Layout>
    </UserContextProvider>
  )
}
