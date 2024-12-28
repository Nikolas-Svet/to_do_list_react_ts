import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from '../EditModal/EditModal'
import PanelTask from '../PanelTask/PanelTask'
import ShareModal from '../ShareModal/ShareModal'
import InfoModal from '../InfoModal/InfoModal'
import { removeTask, updateTask } from '@/store/TasksActions'
import { Task } from '@/types/types'
import styles from './TodoItem.module.scss'

interface TodoItemProps {
  task: Task
  index: number
  moveTask: (fromIndex: number, toIndex: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ task, index, moveTask }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const dispatch = useDispatch()

  const togglePanel = () => setIsPanelOpen(!isPanelOpen)

  const handleDelete = () => setShowDeleteModal(true)
  const handleEdit = () => setShowEditModal(true)
  const handleShare = () => setShowShareModal(true)
  const handleInfo = () => setShowInfo(!showInfo)

  const closeShareModal = () => setShowShareModal(false)
  const confirmDelete = () => {
    dispatch(removeTask(task.id))
    setShowDeleteModal(false)
  }

  const confirmEdit = (updatedTask: Task) => {
    dispatch(updateTask(updatedTask))
    setShowEditModal(false)
  }

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) =>
    e.dataTransfer.setData('taskIndex', index.toString())

  const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
    const fromIndex = parseInt(e.dataTransfer.getData('taskIndex'), 10)
    moveTask(fromIndex, index)
  }

  const handleCopy = () => {
    const textToCopy = `${task.title}: ${task.about}`
    navigator.clipboard.writeText(textToCopy)
    alert('Скопировано в буфер обмена!')
  }

  return (
    <>
      <li
        draggable
        onDragStart={handleDragStart}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={styles.taskItem}
      >
        <div onClick={togglePanel}>
          <p>{task.title}</p>
          <p>{task.about}</p>
        </div>
        <span className="cancel" onClick={handleDelete}></span>
      </li>

      {showDeleteModal && (
        <DeleteModal onConfirm={confirmDelete} onCancel={() => setShowDeleteModal(false)} />
      )}

      {showEditModal && (
        <EditModal task={task} updateTask={confirmEdit} onClose={() => setShowEditModal(false)} />
      )}

      {isPanelOpen && ( <PanelTask onEdit={handleEdit} onShare={handleShare} onInfo={handleInfo} />)}

      {showShareModal && (<ShareModal onClose={closeShareModal} onCopy={handleCopy} />)}

      {showInfo && <InfoModal task={task} onClose={handleInfo} />}
    </>
  )
}

export default TodoItem
