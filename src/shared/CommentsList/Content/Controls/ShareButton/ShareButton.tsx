import React from "react"
import { Icon } from "../../../../Icon"
import styles from './sharebutton.scss'
import { EIcons } from "../../../../constants/enums"

export function ShareButton () {
  return (
    <button className={styles.shareButton}>
      <Icon name={EIcons.share} size={14} />
      <span className={styles.text}>Поделиться</span>
    </button>
  )
}
