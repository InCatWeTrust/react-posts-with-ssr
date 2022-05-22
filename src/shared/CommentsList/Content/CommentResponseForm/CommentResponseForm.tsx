import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import styles from './commentResponseForm.scss'

interface ICommentFormProps {
  buttonText?: string,
  defaultValue?: string
}

export function CommentResponseForm (props: ICommentFormProps) {
  const {
    buttonText = 'Ответить',
    defaultValue = ''
  } = props

  const [value, setValue] = useState('')

  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setValue(defaultValue)
    ref.current?.focus()
    // uncontrolled component
    // if (ref.current) {
    //   ref.current.selectionStart = ref.current.selectionEnd = defaultValue.length
    // }
  }, [defaultValue])

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
  }
  
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    console.log(value)
    // uncontrolled component
    // console.log(ref.current?.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        ref={ref}
        value={value}
        onChange={handleChange}
        // uncontrolled component
        // defaultValue={defaultValue}
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
