import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'
import cacheReducer from './slices/cacheSlice'
import bufferReducer from './slices/bufferSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  cache: cacheReducer,
  buffer: bufferReducer,
})

// Custom persistence middleware
const persistenceMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action)
  
  // Save state to localStorage after each action
  if (typeof window !== 'undefined') {
    try {
      const state = store.getState()
      localStorage.setItem('app-state', JSON.stringify(state))
    } catch (error) {
      console.warn('Failed to save state to localStorage:', error)
    }
  }
  
  return result
}

// Load initial state from localStorage
const loadPersistedState = () => {
  if (typeof window === 'undefined') return undefined
  
  try {
    const serializedState = localStorage.getItem('app-state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.warn('Failed to load state from localStorage:', error)
    return undefined
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadPersistedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(persistenceMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
