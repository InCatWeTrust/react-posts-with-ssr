import React from "react"
import styles from './break.scss'
import classNames from 'classnames'

type TBreakSize = 4 | 8 | 12 | 16 | 20
type TDisplays = 'mobile' | 'tablet' | 'desktop'

interface IBreakprops {
  size: TBreakSize,
  mobileSize?: TBreakSize,
  tabletSize?: TBreakSize,
  desktopSize?: TBreakSize,
  inline?: boolean,
  top?: boolean
}

export function Break(props: IBreakprops) {
  const {
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    inline = false,
    top = false
  } = props

  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
      )}
    />
  )
}
