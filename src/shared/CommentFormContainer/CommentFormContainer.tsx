import React, { ChangeEvent, FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { CommentForm } from "../CommentForm/CommentForm"
import { updateText } from "./commentSlice"

export function CommentFormContainer () {
  const value = useSelector((state: RootState) => (
    state.commentForm.value
  ))

  const dispatch = useDispatch()

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateText(event.target.value))
  }
  
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    console.log(value)
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
