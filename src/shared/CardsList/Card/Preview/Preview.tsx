import React from "react"
import styles from './preview.scss'

interface IPreviewProps {
  image: string
}

export function Preview({ image }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={image}
        alt="preview"
      />
    </div>
  )
}
