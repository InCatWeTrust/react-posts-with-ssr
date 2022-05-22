import React from "react"
import { KarmaCounter } from "../../CardsList/Card/Controls/KarmaCounter"
import styles from './commentsaside.scss'

export function CommentsAside () {
  return (
    <div className={styles.container}>
      <KarmaCounter />
      <div className={styles.verticalLine} />
    </div>
  )
}
