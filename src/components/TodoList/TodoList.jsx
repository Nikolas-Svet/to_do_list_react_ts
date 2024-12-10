import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../TaskForm/TaskForm'
import TodoItem from '../TodoItem/TodoItem'
import { saveTasksToLocalStorage } from '../../utils/Storage'
import { addTask, removeTask, updateTask, moveTask } from '../../store/TasksActions'
import styles from './TodoList.module.scss'

function TodoList() {
  const tasks = useSelector((state) => state.tasksState.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    saveTasksToLocalStorage(tasks)
  }, [tasks])

  const handleAddTask = (task) => {
    dispatch(addTask(task))
  }

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId))
  }

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask))
  }

  const handleMoveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks]
    const [movedTask] = updatedTasks.splice(fromIndex, 1)
    updatedTasks.splice(toIndex, 0, movedTask)
    dispatch(moveTask(updatedTasks))
  }

  return (
    <main className={styles.to_do_list}>
      <TaskForm addTask={handleAddTask} />
      {tasks.length === 0 ? (
        <div className={styles.no_tasks}>No tasks</div>
      ) : (
        <ul className={styles.to_do_list__body}>
          {tasks.map((task, index) => (
            <TodoItem
              key={task.id}
              index={index}
              task={task}
              removeTask={handleRemoveTask}
              updateTask={handleUpdateTask}
              moveTask={handleMoveTask}
            />
          ))}
        </ul>
      )}
    </main>
  )
}

export default TodoList
