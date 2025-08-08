import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BufferEntry {
  id: string
  action: string
  data: any
  timestamp: string
  retryCount: number
  maxRetries: number
}

interface BufferState {
  entries: BufferEntry[]
  isProcessing: boolean
  lastProcessed: string | null
}

const initialState: BufferState = {
  entries: [],
  isProcessing: false,
  lastProcessed: null,
}

const bufferSlice = createSlice({
  name: 'buffer',
  initialState,
  reducers: {
    addToBuffer: (state, action: PayloadAction<{ action: string; data: any; maxRetries?: number }>) => {
      const { action: actionType, data, maxRetries = 3 } = action.payload
      const entry: BufferEntry = {
        id: Date.now().toString(),
        action: actionType,
        data,
        timestamp: new Date().toISOString(),
        retryCount: 0,
        maxRetries,
      }
      state.entries.push(entry)
    },
    removeFromBuffer: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload)
    },
    incrementRetry: (state, action: PayloadAction<string>) => {
      const entry = state.entries.find(e => e.id === action.payload)
      if (entry) {
        entry.retryCount += 1
      }
    },
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload
    },
    clearBuffer: (state) => {
      state.entries = []
    },
    markProcessed: (state) => {
      state.lastProcessed = new Date().toISOString()
    },
  },
})

export const { 
  addToBuffer, 
  removeFromBuffer, 
  incrementRetry, 
  setProcessing, 
  clearBuffer, 
  markProcessed 
} = bufferSlice.actions
export default bufferSlice.reducer
