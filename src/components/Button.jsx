import React from 'react'
import styles from './Button.module.css'
import { ReactComponent as IconButton } from '../assets/icon-dice.svg'

export const Button = ({onClick}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <IconButton />
    </button>
  )
}
