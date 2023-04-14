import React from 'react'
import styles from '../Styles/Avatar.module.css'

export const Avatar = ({ hasBorder = true, src}) => {
  return (
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src}
    />
  )
}
