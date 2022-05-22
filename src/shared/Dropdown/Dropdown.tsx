import React, { useRef } from "react"
import styles from './dropdown.scss'
import { NOOP } from '../../utils/js/noop'

interface IDropdownProps {
  button: React.ReactNode,
  children: React.ReactNode,
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void
}

export function Dropdown (props: IDropdownProps) {
  const {
    button,
    children,
    isOpen,
    onClose = NOOP,
    onOpen = NOOP
  } = props

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)

  const ref = useRef<HTMLDivElement>(null)

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
  React.useEffect(() => {
    function handleClick (event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClick)

    return () => {
      document.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div
            className={styles.list}
            onClick={() => setIsDropdownOpen(false)}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
