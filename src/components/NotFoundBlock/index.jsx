import React from 'react'
import styles from "./NotFounfBlock.module.scss"

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <h1>Ничего не найдено</h1>
        <p className={styles.desc}>К сожалению данная страница отсутсвует в нашем магазине</p>
    </div>
  )
}

export default NotFoundBlock