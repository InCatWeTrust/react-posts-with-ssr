import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

export function usePostsData() {
  const [data, setData] = useState([])
  const token = useContext(tokenContext)

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
