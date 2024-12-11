import React from 'react'
import { Task } from '@/types/types'
import styles from './TodoItem.module.scss'

interface TodoItemProps {
  task: Task
  index: number
  moveTask: (fromIndex: number, toIndex: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ task, index, moveTask }) => {
  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) =>
    e.dataTransfer.setData('taskIndex', index.toString())

  const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
    const fromIndex = parseInt(e.dataTransfer.getData('taskIndex'), 10)
    moveTask(fromIndex, index)
  }

  return (
    <li
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={styles.taskItem}
    >
      <div>
        <p>{task.title}</p>
        <p>{task.about}</p>
      </div>
    </li>
  )
}

export default TodoItem
