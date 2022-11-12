import React from 'react'
import styles from './ContentItems.module.css'

const ContentItems = (props) => {
  return (
    <div className={styles.card}>
        <h6>{props.title}</h6>
    </div>
  )
}

export default ContentItems