import React from 'react'
import styles from './Side.module.css'

const Profile = () => {
  return (
    <div className={styles.profile}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU'
          alt="profile"
        />
        <div className={styles.name}>
            John Alex
        </div>
      </div>
  )
}

export default Profile