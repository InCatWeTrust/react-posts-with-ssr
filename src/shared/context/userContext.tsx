import React from "react"
import { useUserData } from "../../hooks/useUserData"

export interface IUserContextData {
  name?: string
  iconImg?: string
}

interface IUserContextProviderProps {
  children: React.ReactNode
}

export const userContext = React.createContext<IUserContextData>({})

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const [data] = useUserData()

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}
