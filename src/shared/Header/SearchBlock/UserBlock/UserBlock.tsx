import React from "react"
import { Break } from "../../../Break"
import { EColor, EIcons } from "../../../constants/enums"
import { Icon } from "../../../Icon"
import { Text } from "../../../Text"
import styles from './userblock.scss'

const CLIENT_ID = process.env.CLIENT_ID 

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <Icon name={EIcons.anon} />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>
          {username || 'Аноним'}
        </Text>
      </div>
    </a>
  )
}
