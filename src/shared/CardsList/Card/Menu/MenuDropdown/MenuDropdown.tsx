import React, { useRef, useState } from "react"
import ReactDOM from 'react-dom'
import { MenuList } from "../MenuList"
import styles from './menudropdown.scss'
import stylesList from '../MenuList/menulist.scss'
import { EIcons } from "../../../../constants/enums"
import { Icon } from "../../../../Icon"
import { generateId } from "../../../../../utils/js/generateRandomIndex"
import { addEventListenerWithDispose } from "../../../../../utils/js/addEventListenerWithDispose"

const LIST = [
  {
    As: 'li' as const,
    text: 'Комментарии',
    className: stylesList.menuItem,
    divider: styles.divider,
    svg: <Icon name={EIcons.comments} />
  },
  {
    As: 'li' as const,
    text: 'Поделиться',
    className: stylesList.menuItem,
    divider: styles.divider,
    svg: <Icon name={EIcons.share} size={14} />
  },
  {
    As: 'li' as const,
    text: 'Скрыть',
    className: stylesList.menuItem,
    divider: styles.divider,
    svg: <Icon name={EIcons.hide} size={14} />
  },
  {
    As: 'li' as const,
    text: 'Сохранить',
    className: stylesList.menuItem,
    divider: styles.divider,
    svg: <Icon name={EIcons.save} size={14} />
  },
  {
    As: 'li' as const,
    text: 'Пожаловаться',
    className: stylesList.menuItem,
    svg: <Icon name={EIcons.report} size={16} />
  }
].map(generateId)

interface IMenuDropdownProps {
  top?: number,
  left?: number
}

export function MenuDropdown (props: IMenuDropdownProps) {
  const {
    top,
    left
  } = props

  const [list, setList] = React.useState(LIST)
  const [windowWidth, setWindowWidth] = useState(1920)

  const ref = useRef<HTMLDivElement>(null)

  const mobileIcons = ['Скрыть', 'Пожаловаться']

  React.useEffect(() => {
    checkScreenSize(window.innerWidth)

    const dispose = addEventListenerWithDispose(window, 'resize', () => checkScreenSize(window.innerWidth))

    return () => {
     dispose()
    }
  }, [])

  React.useEffect(() => {
    if (window.innerWidth >= 1024) {
      if (top && left && ref.current) {
        ref.current.style.top = `${top + 81}px`
        ref.current.style.left = `${left - 62}px`
      }
    } else {
      if (top && left && ref.current) {
        ref.current.style.top = `${top + 31}px`
        ref.current.style.left = `${left - 133}px`
      }
    }
  }, [top, left, windowWidth])

  const checkScreenSize = (screenSize: number) => {
    setWindowWidth(screenSize)
    if (screenSize < 1024) {
      setList(LIST.filter((item) => ( mobileIcons.includes(item.text) )))
    } else {
      setList(LIST)
    }
  }

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.dropdown} ref={ref}>
      <MenuList menuList={list} />
      <button className={styles.closeButton}>
        Закрыть
      </button>
    </div>
  ), node)
}
