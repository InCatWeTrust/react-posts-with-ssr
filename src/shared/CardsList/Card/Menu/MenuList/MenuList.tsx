import React from "react"
import { GenericList } from "../../../../GenericList"
import styles from './menulist.scss'

interface IMenuListProps {
  menuList: Array<{ id: string, text: string }>
}

export function MenuList({ menuList }: IMenuListProps) {
  return (
    <ul className={styles.menuList}>
      <GenericList
        list={menuList}
      />
    </ul>
  )
}
