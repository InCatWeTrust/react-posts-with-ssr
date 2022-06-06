import React, { ChangeEvent, FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { CommentForm } from "../CommentForm/CommentForm"
import { setIsTouched, updateError, updateText } from "../../reducers/commentSlice"

export function CommentFormContainer () {
  // const value = useSelector((state: RootState) => (
  //   state.commentForm.value
  // ))
  // const error = useSelector((state: RootState) => (
  //   state.commentForm.error
  // ))

  // const dispatch = useDispatch()

  // function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
  //   dispatch(updateText(event.target.value))
  // }
  
  // function handleSubmit (event: FormEvent) {
  //   event.preventDefault()
  //   dispatch(setIsTouched(true))
  //   dispatch(updateError(validateValue()))

  //   const isFormValid = !validateValue()
  //   if (!isFormValid) return

  //   alert(value)
  // }

  // function validateValue () {
  //   return value.length <= 3
  //     ? 'Введите больше 3-х символов'
  //     : ''
  // }

  return (
    <CommentForm
      // value={value}
      // error={error}
      // onChange={handleChange}
      // onSubmit={handleSubmit}
    />
  )
}
