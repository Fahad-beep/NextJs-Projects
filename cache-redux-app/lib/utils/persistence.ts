// Custom persistence utilities
export const persistenceUtils = {
  saveState: (key: string, state: any) => {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.warn(`Failed to save ${key} to localStorage:`, error)
    }
  },

  loadState: (key: string) => {
    if (typeof window === 'undefined') return null
    
    try {
      const serializedState = localStorage.getItem(key)
      if (serializedState === null) return null
      return JSON.parse(serializedState)
    } catch (error) {
      console.warn(`Failed to load ${key} from localStorage:`, error)
      return null
    }
  },

  removeState: (key: string) => {
    if (typeof window === 'undefined') return
    
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn(`Failed to remove ${key} from localStorage:`, error)
    }
  },

  clearAllState: () => {
    if (typeof window === 'undefined') return
    
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith('app-') || key === 'app-state'
      )
      keys.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear localStorage:', error)
    }
  }
}
