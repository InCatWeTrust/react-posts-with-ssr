import React from "react"

export function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault()
    fn(e)
  }
}

// function NotStandardLink(props: any) {
//   return (
//     <a onClick={preventDefault(props.onClick)}>Hello</a>
//   )
// }
