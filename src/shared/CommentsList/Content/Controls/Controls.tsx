import React from "react"
import styles from './controls.scss'
import { CommentsButton } from "./CommentsButton"
import { ShareButton } from "./ShareButton"
import { ReportButton } from "./ReportButton"

interface IControlProps {
  handleCommentFormOpen: () => void
}

export function Controls (props: IControlProps) {
  const {
    handleCommentFormOpen
  } = props

  return (
    <div className={styles.container}>
      <CommentsButton handleCommentFormOpen={handleCommentFormOpen} />
      <ShareButton />
      <ReportButton />
    </div>
  )
}
