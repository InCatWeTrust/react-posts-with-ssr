import React from "react"

export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation()
    fn(e)
  }
}

// function NotStandardLink(props: any) {
//   return (
//     <a onClick={stopPropagation(props.onClick)}>Hello</a>
//   )
// }
