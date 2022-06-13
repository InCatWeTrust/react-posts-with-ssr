import React from "react"
import styles from './textContent.scss'
import { Title } from "./Title"
import { UserLink } from "./UserLink"

interface ITextContentProps {
  author: string,
  title: string,
  avatar: string,
  posted: number,
  period: string,
  id: number | string
}

export function TextContent(props: ITextContentProps) {
  const {
    author,
    title,
    avatar,
    posted,
    period,
    id
  } = props

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink
          author={author}
          thumbnail={avatar}
        />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {posted} {period} назад
        </span>
      </div>
      <Title title={title} id={id} />
    </div>
  )
}
