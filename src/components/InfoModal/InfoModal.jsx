import React from 'react'
import styles from './InfoModal.module.scss'

function InfoModal({ task, onClose }) {
  return (
    <div className="window">
      <div className="window__wrap" onClick={onClose}></div>
      <div className={styles.window__info}>
        <p>
          <strong>Название:</strong> {task.title}
        </p>
        <p>
          <strong>Описание:</strong> {task.about}
        </p>
      </div>
    </div>
  )
}

export default InfoModal
