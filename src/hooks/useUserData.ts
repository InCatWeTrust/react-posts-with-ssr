import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { meRequestAsync } from "../reducers/meSlice"
import { AppDispatch, RootState } from "../store"

export interface IUserData {
  name?: string
  iconImg?: string
}

export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  const token = useSelector((state: RootState) => state.token.value)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (!token) return

    dispatch(meRequestAsync(token))
  }, [token])

  return {
    data,
    loading
  }
}
