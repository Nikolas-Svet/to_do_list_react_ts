export interface Task {
  id: string
  title: string
  about: string
}

export interface TasksState {
  tasks: Task[]
}

export interface RootState {
  tasksState: TasksState
}