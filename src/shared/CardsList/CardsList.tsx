import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Card } from "./Card"
import styles from './cardslist.scss'

export function CardsList () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [after, setAfter] = useState('')
  const [loadCount, setLoadCount] = useState(0)

  const token = useSelector<RootState>(state => state.token.value)

  const bottomOfList = useRef<HTMLDivElement>(null)

  async function loadPosts () {
    if (token) {
      setLoading(true)
      setErrorLoading('')
  
      try {
        const res = await axios.get('https://oauth.reddit.com/best', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            sr_detail: true,
            limit: 10,
            after
          }
        })
  
        setAfter(res.data.data.after)
        setData(prevChildren => prevChildren.concat(...res.data.data.children))
        setLoadCount(loadCount + 1)
      } catch (err) {
        setErrorLoading(String(err))
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && (loadCount % 3 !== 0 || loadCount === 0)) {
        loadPosts()
      }
    }, {
      rootMargin: '100px'
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, after, token, loadCount, loading])

  const listItems = data.map((post: any) => {
    return <Card
      card={post.data}
      key={post.data.id}
    />
  })

  return (
    <div>
      { data && data.length === 0 && !loading && !errorLoading && (
        <div className={styles.load}>Нет ни одного поста</div>
      )}
      { data
        && data.length > 0
        && (
          <ul className={styles.cardsList}>
            {listItems}
          </ul>
        )
      }

      <div ref={bottomOfList} />

      { loading && (
        <div className={styles.load}>Loading...</div>
      )}
      { errorLoading && (
        <div role="alert" className={styles.load}>{errorLoading}</div>
      )}
      { !loading && loadCount !== 0 && loadCount % 3 === 0 && (
        <button
          className={styles.loadMore}
          onClick={loadPosts}
        >
          Загрузить ещё
        </button>
      )}
    </div>
  )
}
