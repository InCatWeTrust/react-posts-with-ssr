import React from "react"
import { Break } from "../../../Break"
import { EColor, EIcons } from "../../../constants/enums"
import { Icon } from "../../../Icon"
import { Text } from "../../../Text"
import styles from './userblock.scss'

const CLIENT_ID = process.env.CLIENT_ID 
const REDIRECT_URI = process.env.REDIRECT_URI

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string,
  loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=identity read submit`}
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
        {
          loading ? (
            <Text size={20} color={EColor.gray99}>
              Loading...
            </Text>
          ) : (
            <Text size={20} color={username ? EColor.black : EColor.gray99}>
              {username || 'Аноним'}
            </Text>
          )
        }
      </div>
    </a>
  )
}
