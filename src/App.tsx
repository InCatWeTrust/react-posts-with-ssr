import React, { useState } from "react"
import './main.global.scss'
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/context/tokenContext"
import { UserContextProvider } from "./shared/context/userContext"
import { PostsContextProvider } from "./shared/context/postsContext"
import { commentContext } from "./shared/context/commentContext"

function AppComponent () {
  const [commentValue, setCommentValue] = useState('')
  const [token] = useToken()

  const CommentProvider = commentContext.Provider

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <CommentProvider value={{
          value: commentValue,
          onChange: setCommentValue
        }}>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </Layout>
        </CommentProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />)
