import React, { useRef, useState } from "react"
import { Dropdown } from "../../../Dropdown"
import styles from './menu.scss'
import { Icon } from "../../../Icon"
import { EIcons } from "../../../constants/enums"
import { MenuDropdown } from "./MenuDropdown/MenuDropdown"
import { getCoords } from "../../../../utils/js/getCoords"
import { addEventListenerWithDispose } from "../../../../utils/js/addEventListenerWithDispose"

interface IPosition {
  top: number,
  left: number
}

export function Menu() {
  const [position, setPosition] = useState<IPosition>({
    top: -1000,
    left: -1000
  })

  const ref = useRef<HTMLDivElement>(null)

  function handleDropdownOpen () {
    const coords = getCoords(ref.current)

    if (coords?.top && coords?.left) {
      setPosition({
        top: coords?.top,
        left: coords?.left
      })
    }
  }

  React.useEffect(() => {
    const dispose = addEventListenerWithDispose(window, 'resize', handleDropdownOpen)

    return () => {
     dispose()
    }
  }, [])

  return (
    <div className={styles.menu} ref={ref}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        }
        onOpen={handleDropdownOpen}
      >
        <MenuDropdown
          top={position.top}
          left={position.left}
        />
      </Dropdown>
    </div>
  )
}
