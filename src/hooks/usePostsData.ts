import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export function usePostsData() {
  const [data, setData] = useState([])
  const token = useSelector((state: RootState) => (
    state.token.value
  ))

  useEffect(() => {
    if (token) {
      axios.get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${token}` },
        params: {
          sr_detail: true
        }
      })
        .then((res) => {
          setData(res.data.data.children)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }, [token])

  return [data]
}
