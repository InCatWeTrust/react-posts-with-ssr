import React from "react"
import styles from './userLink.scss'

interface IUserLinkProps {
  author: string,
  thumbnail: string
}

export function UserLink({ author, thumbnail }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={thumbnail}
        alt="avatar"
      />
      <a href="#user-link" className={styles.username}>
        {author}
      </a>
    </div>
  )
}
