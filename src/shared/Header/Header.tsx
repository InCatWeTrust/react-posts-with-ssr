import React from "react"
import styles from './header.scss'
import { SearchBlock } from "./SearchBlock"
import { SortBlock } from "./SortBlock"
import { ThredTitle } from "./ThredTitle"

export function Header () {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThredTitle />
      <SortBlock />
    </header>
  )
}
