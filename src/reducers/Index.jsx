import { combineReducers } from 'redux'
import tasksReducer from './TasksReducer'

const rootReducer = combineReducers({
  tasksState: tasksReducer
})

export default rootReducer
