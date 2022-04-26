import React from "react"

export function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key])
}

// function Input({ value, onChange }: { onChange: (value: string) => void, value: string }) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }

// function Checkbox({ value, onChange }: { onChange: (value: boolean) => void, value: boolean }) {
//   return (
//     <input type="checkbox" checked={value} onChange={getChecked(onChange)} />
//   )
// }


export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')
