import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

interface TasksState {
  tasks: Task[]
  lastSync: string | null
  isDirty: boolean
}

const initialState: TasksState = {
  tasks: [],
  lastSync: null,
  isDirty: false,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>) => {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      state.tasks.push(newTask)
      state.isDirty = true
    },
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<Task> }>) => {
      const { id, updates } = action.payload
      const taskIndex = state.tasks.findIndex(task => task.id === id)
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...updates,
          updatedAt: new Date().toISOString(),
        }
        state.isDirty = true
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
      state.isDirty = true
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
      state.isDirty = false
    },
    markSynced: (state) => {
      state.lastSync = new Date().toISOString()
      state.isDirty = false
    },
    clearTasks: (state) => {
      state.tasks = []
      state.isDirty = true
    },
  },
})

export const { addTask, updateTask, deleteTask, setTasks, markSynced, clearTasks } = tasksSlice.actions
export default tasksSlice.reducer
