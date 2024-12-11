import { Task } from '@/types/types'

export const addTask = (task: Task) => ({
  type: 'ADD_TASK',
  payload: task
})

export const removeTask = (taskId: string) => ({
  type: 'REMOVE_TASK',
  payload: taskId
})

export const updateTask = (task: Task) => ({
  type: 'UPDATE_TASK',
  payload: task
})

export const moveTask = (tasks: Task[]) => ({
  type: 'MOVE_TASK',
  payload: tasks
})
