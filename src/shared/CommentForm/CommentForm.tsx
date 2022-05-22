import React, { ChangeEvent, FormEvent, useContext } from "react"
import { commentContext } from "../context/commentContext"
import styles from './commentForm.scss'

interface ICommentFormProps {
  buttonText?: string,
  defaultValue?: string
}

export function CommentForm (props: ICommentFormProps) {
  const {
    buttonText = 'Комментировать',
  } = props

  const {
    value,
    onChange
  } = useContext(commentContext)

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }
  
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    console.log(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={styles.button}
      >
        {buttonText}
      </button>
    </form>
  )
}
