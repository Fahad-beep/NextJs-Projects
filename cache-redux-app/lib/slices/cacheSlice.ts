import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CacheEntry {
  key: string
  data: any
  timestamp: string
  ttl: number // Time to live in milliseconds
}

interface CacheState {
  entries: Record<string, CacheEntry>
  hits: number
  misses: number
  isEnabled: boolean
}

const initialState: CacheState = {
  entries: {},
  hits: 0,
  misses: 0,
  isEnabled: true,
}

const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {
    setCache: (state, action: PayloadAction<{ key: string; data: any; ttl?: number }>) => {
      const { key, data, ttl = 300000 } = action.payload // Default 5 minutes TTL
      state.entries[key] = {
        key,
        data,
        timestamp: new Date().toISOString(),
        ttl,
      }
    },
    getCache: (state, action: PayloadAction<string>) => {
      const entry = state.entries[action.payload]
      if (entry) {
        const now = Date.now()
        const entryTime = new Date(entry.timestamp).getTime()
        if (now - entryTime < entry.ttl) {
          state.hits += 1
          return
        } else {
          delete state.entries[action.payload]
        }
      }
      state.misses += 1
    },
    clearCache: (state) => {
      state.entries = {}
    },
    toggleCache: (state) => {
      state.isEnabled = !state.isEnabled
    },
    cleanExpiredCache: (state) => {
      const now = Date.now()
      Object.keys(state.entries).forEach(key => {
        const entry = state.entries[key]
        const entryTime = new Date(entry.timestamp).getTime()
        if (now - entryTime >= entry.ttl) {
          delete state.entries[key]
        }
      })
    },
  },
})

export const { setCache, getCache, clearCache, toggleCache, cleanExpiredCache } = cacheSlice.actions
export default cacheSlice.reducer
