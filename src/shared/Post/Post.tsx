import React, { useEffect, useRef } from "react"
import ReactDOM from 'react-dom'
import { CommentFormContainer } from "../CommentFormContainer"
import { Comments } from "../Comments"
import styles from './post.scss'

interface IPostProps {
  onClose?: () => void
}

export function Post (props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick (event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.()
      }
    }

    if (ref.current) {
      const y = window.pageYOffset + ref.current.getBoundingClientRect().y

      window.scroll({ top: y, behavior: "smooth" })
    }

    document.addEventListener('pointerdown', handleClick)

    return () => {
      document.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis odio similique neque cumque labore a rem quibusdam deserunt, magnam corrupti perspiciatis deleniti necessitatibus enim ratione sed ipsam aliquam! Possimus?</h2>

      <div className={styles.content}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat necessitatibus nemo maxime libero totam ducimus sint sapiente blanditiis nostrum perferendis officiis velit aliquam, earum itaque ipsam pariatur, nam aliquid.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus voluptates atque veritatis dolorum et laudantium nesciunt repellat, alias dolorem cum expedita a reprehenderit rerum exercitationem accusamus ipsum laborum commodi.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quas deserunt obcaecati dicta eaque voluptatibus fugit, officia temporibus sint dolorem. Quasi quisquam illum ex libero dolorum dignissimos fugit ratione dicta.</p>
      </div>

      <CommentFormContainer />

      <div className={styles.break} />

      <Comments />
    </div>
  ), node)
}
