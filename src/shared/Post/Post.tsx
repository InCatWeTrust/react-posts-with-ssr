import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { updateText } from "../../reducers/commentSlice"
import { removeToken } from "../../reducers/tokenSlice"
import { RootState } from "../../store"
import { CommentFormContainer } from "../CommentFormContainer"
import { Comments } from "../Comments"
import styles from './post.scss'

interface IPost {
  title?: string,
  selftext?: string
}

export function Post () {
  const [data, setData] = useState<IPost>({})
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')

  const location = useLocation()
  const postId = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

  const token = useSelector<RootState>(state => state.token.value)

  const ref = useRef<HTMLDivElement>(null)
  const history = useHistory()

  const dispatch = useDispatch()

  async function loadPost () {
    setLoading(true)
    setErrorLoading('')
    setData({})

    try {
      const res = await axios.get(`https://oauth.reddit.com/by_id/t3_${postId}`, {
        headers: { Authorization: `bearer ${token}` }
      })

      if (res.data.data) {
        const resPost = res.data.data.children[0].data
        setData(resPost)
        dispatch(updateText(`Привет, ${resPost.author}`))
      } else if (token) {
        history.push('/posts')
      }
    } catch (err: any) {
      setErrorLoading(String(err))
      if (err.response.status === 401) {
        localStorage.removeItem('token')
        dispatch(removeToken())
        history.push('/posts')
      } else if (err.response.status === 404) {
        history.push('/posts')
      }
    } finally {
      setLoading(false)
      setLoaded(true)
    }
  }

  useEffect(() => {
    function handleClick (event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts')
      }
    }

    document.addEventListener('pointerdown', handleClick)

    return () => {
      document.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  useEffect(() => {
    loadPost()
  }, [token])

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      { errorLoading && (
        <span role="alert" className={styles.textCenter}>{errorLoading}</span>
      )}
      { data && !loading && !errorLoading && loaded && token && (
        <div>
          <h2>{data.title}</h2>
    
          { data.selftext && (
            <div className={styles.content}>
              <p>{data.selftext}</p>
            </div>
          )}
          { !data.selftext && (
            <span className={styles.textCenter}>
              Sorry, but there is no text here ¯\_(ツ)_/¯
            </span>
          )}
    
          <CommentFormContainer />
    
          <div className={styles.break} />
    
          <Comments />
        </div>
      )}
      { data && !loading && !errorLoading && loaded && !token && (
        <span className={styles.textCenter}>
          Авторизуйтесь, чтобы увидеть пост
        </span>
      )}
      { loading && (
        <span className={styles.textCenter}>Loading...</span>
      )}
    </div>
  ), node)
}
