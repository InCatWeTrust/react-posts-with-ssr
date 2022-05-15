import React, { useContext } from "react"
import { postsContext } from "../context/postsContext"
import { Card } from "./Card"
import styles from './cardslist.scss'

export function CardsList () {
  const data = useContext(postsContext)
  const listItems = data.map((post: any) => {
    return <Card
      card={post.data}
      key={post.data.id}
    />
  })

  return (
    <div>
      { data
        && data.length > 0
        && (
          <ul className={styles.cardsList}>
            {listItems}
          </ul>
        )
      }
    </div>
  )
}
