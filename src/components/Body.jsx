import React from 'react'
import styles from './Body.module.css'

export const Body = ({advice}) => {
  return (
    <p className={styles.bodyContainer}>"{advice}"</p>
  )
}
