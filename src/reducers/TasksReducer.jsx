import { getTasksFromLocalStorage } from '../utils/Storage'

const initialState = {
  tasks: getTasksFromLocalStorage()
}

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    case 'MOVE_TASK':
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
}
