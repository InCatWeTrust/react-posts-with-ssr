import React from "react"
import { Link } from "react-router-dom"
import styles from './title.scss'

interface ITitleProps {
  title: string,
  id: number | string
}

export function Title({ title, id }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/${id}`}
        className={styles.postLink}
      >
        {title}
      </Link>
    </h2>
  )
}
