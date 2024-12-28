import React from 'react'
import styles from './PanelTask.module.scss'
import editIcon from '../../icons/edit.svg'
import shareIcon from '../../icons/share.svg'
import infoIcon from '../../icons/info.svg'

interface PanelTaskProps {
  onEdit: () => void
  onShare: () => void
  onInfo: () => void
}

const PanelTask: React.FC<PanelTaskProps> = ({ onEdit, onShare, onInfo }) => {
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
