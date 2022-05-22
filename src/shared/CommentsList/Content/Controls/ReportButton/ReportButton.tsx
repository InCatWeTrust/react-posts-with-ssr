import React from "react"
import { Icon } from "../../../../Icon"
import styles from './reportbutton.scss'
import { EIcons } from "../../../../constants/enums"

export function ReportButton () {
  return (
    <button className={styles.reportButton}>
      <Icon name={EIcons.report} size={14} />
      <span className={styles.text}>Пожаловаться</span>
    </button>
  )
}
