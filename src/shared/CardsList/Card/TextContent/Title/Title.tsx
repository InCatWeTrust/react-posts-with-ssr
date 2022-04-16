import React from "react"
import styles from './title.scss'

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-link" className={styles.postLink}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deserunt tempora? At vel fugiat placeat delectus repellat sequi laudantium, voluptates non unde reprehenderit, est beatae cum consectetur id consequuntur! Explicabo.
      </a>
    </h2>
  )
}
