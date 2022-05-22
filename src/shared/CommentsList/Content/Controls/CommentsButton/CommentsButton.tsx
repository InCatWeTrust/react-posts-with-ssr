import React from "react"
import { Icon } from "../../../../Icon"
import styles from './commentsbutton.scss'
import { EIcons } from "../../../../constants/enums"

interface ICommentsButtonProps {
  handleCommentFormOpen: () => void
}

export function CommentsButton (props: ICommentsButtonProps) {
  const {
    handleCommentFormOpen
  } = props

  return (
    <button className={styles.commentsButton} onClick={handleCommentFormOpen}>
      <Icon name={EIcons.comments} size={14} />
      <span className={styles.text}>Ответить</span>
    </button>
  )
}
