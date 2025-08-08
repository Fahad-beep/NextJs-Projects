import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { addToBuffer, removeFromBuffer, incrementRetry } from '@/lib/slices/bufferSlice'

export function useBuffer() {
  const dispatch = useDispatch()
  const buffer = useSelector((state: RootState) => state.buffer)

  const addToBufferQueue = (action: string, data: any, maxRetries = 3) => {
    dispatch(addToBuffer({ action, data, maxRetries }))
  }

  const processBuffer = async () => {
    for (const entry of buffer.entries) {
      try {
        // Simulate API call or processing
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // If successful, remove from buffer
        dispatch(removeFromBuffer(entry.id))
      } catch (error) {
        // If failed, increment retry count
        dispatch(incrementRetry(entry.id))
        
        // Remove if max retries reached
        if (entry.retryCount >= entry.maxRetries) {
          dispatch(removeFromBuffer(entry.id))
        }
      }
    }
  }

  return {
    addToBufferQueue,
    processBuffer,
    entries: buffer.entries,
    isProcessing: buffer.isProcessing,
    pendingCount: buffer.entries.length
  }
}
