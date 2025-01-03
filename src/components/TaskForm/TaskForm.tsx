import React, { useState, FormEvent } from 'react'
import styles from './TaskForm.module.scss'
import { Task } from '@/types/types'

interface TaskFormProps {
  addTask: (task: Task) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.trim() && about.trim()) {
      const newTask: Task = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title,
        about
      }
      addTask(newTask)
      setTitle('')
      setAbout('')
    } else {
      alert('Одно или оба поля пусты!')
    }
  }

  return (
    <div className={styles.to_do_list__title}>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input">
            <input
              type="text"
              name="title"
              placeholder="&nbsp;"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Title...</label>
          </div>
          <div className="input">
            <input
              type="text"
              name="about"
              placeholder="&nbsp;"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <label>About...</label>
          </div>
        </div>
        <button type="submit" className="add_task"></button>
      </form>
    </div>
  )
}

export default TaskForm
