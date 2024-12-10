export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
})

export const removeTask = (taskId) => ({
  type: 'REMOVE_TASK',
  payload: taskId
})

export const updateTask = (task) => ({
  type: 'UPDATE_TASK',
  payload: task
})

export const moveTask = (tasks) => ({
  type: 'MOVE_TASK',
  payload: tasks
})
