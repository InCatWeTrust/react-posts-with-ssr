import React from "react"
import { IUserData, useUserData } from "../../hooks/useUserData"

export interface IUserContextData {
  data?: IUserData,
  loading?: boolean
}

interface IUserContextProviderProps {
  children: React.ReactNode
}

export const userContext = React.createContext<IUserContextData>({})

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const data = useUserData()

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}
