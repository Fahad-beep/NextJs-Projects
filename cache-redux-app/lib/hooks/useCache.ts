import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { setCache, getCache } from '@/lib/slices/cacheSlice'

export function useCache() {
  const dispatch = useDispatch()
  const cache = useSelector((state: RootState) => state.cache)

  const getCachedData = (key: string) => {
    dispatch(getCache(key))
    const entry = cache.entries[key]
    
    if (entry && cache.isEnabled) {
      const now = Date.now()
      const entryTime = new Date(entry.timestamp).getTime()
      if (now - entryTime < entry.ttl) {
        return entry.data
      }
    }
    return null
  }

  const setCachedData = (key: string, data: any, ttl?: number) => {
    if (cache.isEnabled) {
      dispatch(setCache({ key, data, ttl }))
    }
  }

  return {
    getCachedData,
    setCachedData,
    isEnabled: cache.isEnabled,
    stats: {
      hits: cache.hits,
      misses: cache.misses,
      entries: Object.keys(cache.entries).length
    }
  }
}
