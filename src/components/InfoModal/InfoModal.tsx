import React from 'react'
import { Task } from '@/types/types'
import styles from './InfoModal.module.scss'

interface InfoModalProps {
  task: Task
  onClose: () => void
}

const InfoModal: React.FC<InfoModalProps> = ({ task, onClose }) => {
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
