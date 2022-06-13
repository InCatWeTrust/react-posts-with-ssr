import React from "react"
import styles from './card.scss'
import { Controls } from "./Controls"
import { Menu } from "./Menu"
import { Preview } from "./Preview"
import { TextContent } from "./TextContent"

interface ICardProps {
  card: ICardData
}

interface ICardData {
  author: string,
  title: string,
  thumbnail: string
  ups: number,
  created: number,
  id: string | number
}

export function Card(props: ICardProps) {
  const {
    card
  } = props

  const noImage = 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  const previewImg = card.thumbnail && card.thumbnail.includes('http')
    ? card.thumbnail
    : noImage

  const seconds = new Date().getTime() / 1000 - card.created
  const postedAt = seconds / 3600 <= 24
    ? Math.floor(seconds / 3600)
    : Math.floor(seconds / 3600 / 24)
  const period = seconds / 3600 <= 24
    ? 'часа'
    : 'дней'

  return (
    <li className={styles.card}>
      <TextContent
        author={card.author}
        title={card.title}
        avatar={noImage}
        posted={postedAt}
        period={period}
        id={card.id}
      />
      <Preview
        image={previewImg}
      />
      <Menu />
      <Controls
        upvotes={card.ups}
      />
    </li>
  )
}
