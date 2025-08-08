"use client"

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { clearCache, toggleCache, cleanExpiredCache } from '@/lib/slices/cacheSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Trash2, RefreshCw, Database } from 'lucide-react'

export default function CacheStatus() {
  const dispatch = useDispatch()
  const cache = useSelector((state: RootState) => state.cache)
  const buffer = useSelector((state: RootState) => state.buffer)

  const cacheEntries = Object.keys(cache.entries).length
  const bufferEntries = buffer.entries.length
  const hitRate = cache.hits + cache.misses > 0 
    ? ((cache.hits / (cache.hits + cache.misses)) * 100).toFixed(1)
    : '0'

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          System Status
        </CardTitle>
        <CardDescription>
          Cache performance and buffer status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Cache Enabled</span>
          <Switch
            checked={cache.isEnabled}
            onCheckedChange={() => dispatch(toggleCache())}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{cacheEntries}</div>
            <div className="text-xs text-muted-foreground">Cache Entries</div>
          </div>
          <div className="text-center p-3 border rounded-lg">
            <div className="text-2xl font-bold text-green-600">{hitRate}%</div>
            <div className="text-xs text-muted-foreground">Hit Rate</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Cache Hits:</span>
            <Badge variant="outline">{cache.hits}</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>Cache Misses:</span>
            <Badge variant="outline">{cache.misses}</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>Buffer Entries:</span>
            <Badge variant={bufferEntries > 0 ? "destructive" : "outline"}>
              {bufferEntries}
            </Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => dispatch(cleanExpiredCache())}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <RefreshCw className="w-4 h-4 mr-1" />
            Clean
          </Button>
          <Button
            onClick={() => dispatch(clearCache())}
            variant="destructive"
            size="sm"
            className="flex-1"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Clear
          </Button>
        </div>

        {buffer.isProcessing && (
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Processing buffer...
          </div>
        )}
      </CardContent>
    </Card>
  )
}
