import { Task } from '@/types/types'

interface TaskState {
  tasks: Task[]
}

const initialState: TaskState = {
  tasks: []
}

export default function tasksReducer(state = initialState, action: any): TaskState {
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
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task))
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
