import React, { useState } from "react"
import { Text } from "../../Text"
import { CommentsList } from "../CommentsList"
import { CommentResponseForm } from "./CommentResponseForm"
import styles from './content.scss'
import { Controls } from "./Controls"
import { UserLink } from "./UserLink"

interface IContentProps {
  reply: any,
  userName: string
}

export function Content (props: IContentProps) {
  const {
    reply,
    userName
  } = props

  const [commentFormIsOpen, setCommentFormIsOpen] = useState(false)

  function handleCommentFormOpen () {
    setCommentFormIsOpen(!commentFormIsOpen)
  }

  return (
    <div className={styles.container}>
      <UserLink userName={userName} />
      <div className={styles.textContainer}>
        <Text lineHeight={24}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum, laborum ea sunt reiciendis nobis maxime molestiae ratione commodi obcaecati cum! Voluptatem, consequuntur consequatur unde modi officiis laboriosam in tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui optio tempore cumque. Necessitatibus, temporibus velit veritatis nam sed aliquid earum animi quas ratione. Corporis a asperiores reprehenderit voluptates. Dolore, harum?
        </Text>
      </div>
      <Controls handleCommentFormOpen={handleCommentFormOpen} />
      {commentFormIsOpen && (
        <CommentResponseForm
          buttonText="Ответить"
          defaultValue={`${userName}, `}
        />
      )}
      {reply && reply.length > 0 && (
        <CommentsList
          comments={reply}
        />
      )}
    </div>
  )
}
