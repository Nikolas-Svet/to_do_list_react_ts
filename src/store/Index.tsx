import { createStore } from 'redux'
import rootReducer from '@/reducers/TasksReducer'

const store = createStore(rootReducer)

export default store
