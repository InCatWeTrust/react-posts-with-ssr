import { Formik } from "formik"
import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateText } from "../../reducers/commentSlice"
import { RootState } from "../../store"
import styles from './commentForm.scss'

// interface ICommentFormProps {
//   value: string,
//   error?: string,
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
//   onSubmit: (event: FormEvent) => void
// }

// export function CommentForm (props: ICommentFormProps) {
//   const {
//     value,
//     error,
//     onChange,
//     onSubmit
//   } = props

//   const isTouched = useSelector((state: RootState) => (
//     state.commentForm.isTouched
//   ))

//   return (
//     <form
//       className={styles.form}
//       onSubmit={onSubmit}
//     >
//       <textarea
//         id="comment-form-textarea"
//         className={styles.input}
//         value={value}
//         onChange={onChange}
//         aria-invalid={error ? 'true' : undefined}
//       />
//       { isTouched && error && (
//         <span>{error}</span>       
//       ) }
//       <button
//         type="submit"
//         className={styles.button}
//       >
//         Комментировать
//       </button>
//     </form>
//   )
// }

export function CommentForm () {
  const comment = useSelector((state: RootState) => (
    state.commentForm.value
  ))

  const dispatch = useDispatch()

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateText(event.target.value))
  }

  return (
    <Formik
      initialValues={{ comment }}
      validate={(values) => {
        const errors: any = {}
        if (values.comment.length <= 3) {
          errors.comment = 'Введите больше 3-х символов'
        }
        return errors
      }}
      onSubmit={(values) => {
        alert(values.comment)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        setFieldValue
      }) => (
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <textarea
            id="comment-form-textarea"
            className={styles.input}
            value={values.comment}
            onChange={(e) => {
              handleChange(e)
              setFieldValue('comment', e.target.value, false)
            }}
            aria-invalid={errors.comment ? 'true' : undefined}
          />
          { touched.comment && errors.comment && (
            <span>{errors.comment}</span>       
          )}
          <button
            type="submit"
            className={styles.button}
          >
            Комментировать
          </button>
        </form>
      )}
    </Formik>
  )
}
