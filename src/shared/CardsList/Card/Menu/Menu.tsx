import React from "react"
import { Dropdown } from "../../../Dropdown"
import styles from './menu.scss'
import stylesList from './MenuList/menulist.scss'
import { MenuList } from "./MenuList"
import { generateId } from "../../../../utils/js/generateRandomIndex"
import { addEventListenerWithDispose } from "../../../../utils/js/addEventListenerWithDispose"
import { Icon } from "../../../Icon"
import { EIcons } from "../../../constants/enums"

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

export function Menu() {
  const [list, setList] = React.useState(LIST)

  const mobileIcons = ['Скрыть', 'Пожаловаться']

  React.useEffect(() => {
    checkScreenSize(window.innerWidth)

    const dispose = addEventListenerWithDispose(window, 'resize', () => checkScreenSize(window.innerWidth))

    return () => {
     dispose()
    }
  }, [])

  const checkScreenSize = (screenSize: number) => {
    if (screenSize <= 1024) {
      setList(LIST.filter((item) => ( mobileIcons.includes(item.text) )))
    } else {
      setList(LIST)
    }
  }

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuList menuList={list} />
          <button className={styles.closeButton}>
            Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  )
}
