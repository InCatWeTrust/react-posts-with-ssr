import React from "react"
import styles from './userlink.scss'

interface IUserLinkProps {
  userName: string
}

export function UserLink ({ userName }: IUserLinkProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src='https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
        alt="avatar"
      />
      <a href="#user-link" className={styles.username}>
        {userName}
      </a>
      <span className={styles.published}>
        1 час назад
      </span>
      <a href="#league" className={styles.league}>
        Лига юристов
      </a>
    </div>
  )
}
