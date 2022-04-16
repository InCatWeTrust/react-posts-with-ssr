import React from "react"
import styles from './userLink.scss'

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://images.unsplash.com/photo-1591102972305-213abaa76d6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
        alt="avatar"
      />
      <a href="#user-link" className={styles.username}>
        Павел Одинцов
      </a>
    </div>
  )
}
