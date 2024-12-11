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

export function saveTasksToLocalStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function getTasksFromLocalStorage(): Task[] {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : []
}
