import React from 'react'
import styles from './DeleteModal.module.scss'

interface DeleteModalProps {
  onConfirm: () => void
  onCancel: () => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="window">
      <div className="window__wrap" onClick={onCancel}></div>
      <div className={styles.window__delete}>
        <p>Delete this task?</p>
        <div className="default_button_for_window">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
