import React from "react"
import { NOOP } from '../../utils/js/noop'

interface IItem {
  id: string,
  text: string,
  onClick?: (id?: string) => void,
  className?: string,
  As?: 'a' | 'li' | 'button' | 'div',
  href?: string,
  divider?: string
  svg?: React.ReactNode
}

interface IGenericListProps {
  list: IItem[]
}

export function GenericList ({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = NOOP, className, href, id, divider, svg }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {svg}
          <span>{text}</span>
          {divider && (
            <div className={divider} />
          )}
        </As>
      ))}
    </>
  )
}
