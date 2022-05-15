import React from "react"
import { usePostsData } from "../../hooks/usePostsData"

interface IPostsContextProviderProps {
  children: React.ReactNode
}

export const postsContext = React.createContext<Array<{}>>([])

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const [data] = usePostsData()

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}
