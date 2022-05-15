import React from "react"
import { CommentsButton } from "./CommentsButton"
import { KarmaCounter } from "./KarmaCounter"
import { SaveButton } from "./SaveButton"
import { ShareButton } from "./ShareButton"
import styles from './controls.scss'

interface IControlsProps {
  upvotes: number
}

export function Controls({ upvotes }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter upvotes={upvotes} />
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  )
}
