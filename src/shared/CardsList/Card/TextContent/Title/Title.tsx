import React, { useState } from "react"
import { Post } from "../../../../Post"
import styles from './title.scss'

interface ITitleProps {
  title: string
}

export function Title({ title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <h2 className={styles.title}>
      <a href="#post-link" className={styles.postLink} onClick={ () => setIsModalOpened(true) }>
        {title}
      </a>
      {isModalOpened && (
        <Post
          onClose={() => { setIsModalOpened(false) }}
        />
      )}
    </h2>
  )
}
