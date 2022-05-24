import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"

interface IUserData {
  name?: string
  iconImg?: string
}

export function useUserData() {
  const [data, setData] = useState<IUserData>({})
  const token = useSelector((state: RootState) => (
    state.token.value
  ))

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((res) => {
        const userData = res.data
        setData({ name: userData.name, iconImg: userData.icon_img })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [token])

  return [data]
}
