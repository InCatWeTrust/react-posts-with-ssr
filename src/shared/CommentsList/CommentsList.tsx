import React from "react"
import { CommentsAside } from "./CommentsAside"
import styles from './commentslist.scss'
import { Content } from "./Content"

interface ICommentsListProps {
  comments: any,
}

export function CommentsList (props: ICommentsListProps) {
  const {
    comments
  } = props

  return (
    <div>
      {comments.map((comment: any) => (
        <div className={styles.container} key={comment.id}>
          <CommentsAside />
          <Content
            reply={comment.reply}
            userName={comment.userName}
          />
        </div>
      ))}
    </div>
  )
}
