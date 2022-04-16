import React from "react"
import { CommentsButton } from "./CommentsButton"
import { KarmaCounter } from "./KarmaCounter"
import { SaveButton } from "./SaveButton"
import { ShareButton } from "./ShareButton"
import styles from './controls.scss'

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  )
}
