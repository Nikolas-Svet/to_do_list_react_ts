import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../TaskForm/TaskForm'
import TodoItem from '../TodoItem/TodoItem'
import { saveTasksToLocalStorage } from '@/utils/Storage'
import { addTask, moveTask } from '@/store/TasksActions'
import { RootState, Task } from '@/types/types'
import styles from './TodoList.module.scss'

const TodoList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasksState.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    saveTasksToLocalStorage(tasks)
  }, [tasks])

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task))
  }

  const handleMoveTask = (fromIndex: number, toIndex: number) => {
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
            <TodoItem key={task.id} index={index} task={task} moveTask={handleMoveTask} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default TodoList
