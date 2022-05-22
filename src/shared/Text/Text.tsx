import React from "react"
import styles from './text.scss'
import classNames from 'classnames'
import { EColor } from '../constants/enums'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

interface ITextProps {
  As?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div',
  children?: React.ReactNode,
  size?: TSizes,
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
  color?: EColor,
  bold?: boolean,
  upperCase?: boolean,
  lineHeight?: number
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColor.black,
    bold = false,
    upperCase = false,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    lineHeight
  } = props

  const classes = classNames(
    styles[`s${size}`],
    styles[`lh${lineHeight}`],
    { [styles.bold]: bold },
    { [styles.upperCase]: upperCase },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]
  )

  return (
    <As className={classes}>
      {children}
    </As>
  )
}
