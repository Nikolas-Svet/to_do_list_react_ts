import React from 'react'
import editIcon from '../../icons/edit.svg'
import shareIcon from '../../icons/share.svg'
import infoIcon from '../../icons/info.svg'
import styles from './PanelTask.module.scss'

function PanelTask({ onEdit, onShare, onInfo }) {
  return (
    <div className={styles.panel_task}>
      <div className={styles.panel_task__content}>
        <button className="edit_task_btn" onClick={onEdit}>
          <img src={editIcon} alt="Edit" />
        </button>
        <button className="share_task_btn" onClick={onShare}>
          <img src={shareIcon} alt="Share" />
        </button>
        <button onClick={onInfo}>
          <img src={infoIcon} alt="Info" />
        </button>
      </div>
    </div>
  )
}

export default PanelTask
