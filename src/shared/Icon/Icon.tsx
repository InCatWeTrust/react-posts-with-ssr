import React from "react"
import styles from './icon.scss';
import * as Icons from '../icons'
import classNames from 'classnames'

type TSizes = 20 | 16 | 15 | 14 | 13 | 12 | 11 | 10

interface IIconProps {
  name: string,
  size?: TSizes
}

interface IIcons {
  [key: string]: React.FC
}

export function Icon(props: IIconProps) {
  const {
    name,
    size = 15
  } = props

  const Icon = (Icons as IIcons)[name+'Icon']

  const classes = classNames(
    styles[`s${size}`]
  )

  return (
    <div className={classes}>
      <Icon />
    </div>
  )
} 
