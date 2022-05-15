import React from "react"
import styles from './title.scss'

interface ITitleProps {
  title: string
}

export function Title({ title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href="#post-link" className={styles.postLink}>
        {title}
      </a>
    </h2>
  )
}
