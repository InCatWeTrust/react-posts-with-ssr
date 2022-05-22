import React from "react"
import { CommentsList } from "../CommentsList"

const dummyComments = [
  {
    id: 1,
    userName: 'Lorem ipsum',
    reply: [
      {
        id: 3,
        userName: 'dolor sit',
        reply: [
          {
            id: 4,
            userName: 'amet consectetur',
            reply: []
          }
        ]
      },
      {
        id: 7,
        userName: 'adipisicing elit',
        reply: []
      }
    ]
  },
  {
    id: 2,
    userName: 'Accusamus ratione',
    reply: []
  },
  {
    id: 5,
    userName: 'quis odit',
    reply: [
      {
        id: 6,
        userName: 'repellendus saepe',
        reply: []
      }
    ]
  }
]

export function Comments () {
  return (
    <div>
      <CommentsList comments={dummyComments} />
    </div>
  )
}
