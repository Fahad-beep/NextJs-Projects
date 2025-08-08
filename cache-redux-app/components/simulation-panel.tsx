"use client"

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { clearTasks } from '@/lib/slices/tasksSlice'
import { clearCache } from '@/lib/slices/cacheSlice'
import { clearBuffer, setProcessing } from '@/lib/slices/bufferSlice'
import { persistenceUtils } from '@/lib/utils/persistence'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Zap, RefreshCw, Database, Wifi, WifiOff } from 'lucide-react'

export default function SimulationPanel() {
  const dispatch = useDispatch()
  const [isOffline, setIsOffline] = useState(false)
  const [lastSimulation, setLastSimulation] = useState<string | null>(null)
  const buffer = useSelector((state: RootState) => state.buffer)

  const simulateDataLoss = () => {
    dispatch(clearTasks())
    setLastSimulation('Data Loss Simulated')
    setTimeout(() => setLastSimulation(null), 3000)
  }

  const simulateCacheFailure = () => {
    dispatch(clearCache())
    setLastSimulation('Cache Cleared')
    setTimeout(() => setLastSimulation(null), 3000)
  }

  const simulateNetworkFailure = () => {
    setIsOffline(true)
    dispatch(setProcessing(true))
    setLastSimulation('Network Offline')
    
    setTimeout(() => {
      setIsOffline(false)
      dispatch(setProcessing(false))
      setLastSimulation('Network Restored')
      setTimeout(() => setLastSimulation(null), 2000)
    }, 5000)
  }

  const simulateBufferProcessing = () => {
    dispatch(setProcessing(true))
    setLastSimulation('Processing Buffer')
    
    setTimeout(() => {
      dispatch(setProcessing(false))
      setLastSimulation('Buffer Processed')
      setTimeout(() => setLastSimulation(null), 2000)
    }, 3000)
  }

  const resetSystem = () => {
    dispatch(clearTasks())
    dispatch(clearCache())
    dispatch(clearBuffer())
    persistenceUtils.clearAllState()
    setIsOffline(false)
    setLastSimulation('System Reset')
    setTimeout(() => {
      setLastSimulation(null)
      window.location.reload()
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Simulation Panel
        </CardTitle>
        <CardDescription>
          Test system resilience and recovery mechanisms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {lastSimulation && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{lastSimulation}</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Network Status</span>
          <Badge variant={isOffline ? "destructive" : "default"}>
            {isOffline ? (
              <>
                <WifiOff className="w-3 h-3 mr-1" />
                Offline
              </>
            ) : (
              <>
                <Wifi className="w-3 h-3 mr-1" />
                Online
              </>
            )}
          </Badge>
        </div>

        <div className="space-y-2">
          <Button
            onClick={simulateDataLoss}
            variant="destructive"
            size="sm"
            className="w-full"
            disabled={buffer.isProcessing}
          >
            <Database className="w-4 h-4 mr-2" />
            Simulate Data Loss
          </Button>

          <Button
            onClick={simulateCacheFailure}
            variant="outline"
            size="sm"
            className="w-full"
            disabled={buffer.isProcessing}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Cache
          </Button>

          <Button
            onClick={simulateNetworkFailure}
            variant="secondary"
            size="sm"
            className="w-full"
            disabled={isOffline || buffer.isProcessing}
          >
            <WifiOff className="w-4 h-4 mr-2" />
            Network Failure
          </Button>

          <Button
            onClick={simulateBufferProcessing}
            variant="default"
            size="sm"
            className="w-full"
            disabled={buffer.isProcessing}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Process Buffer
          </Button>
        </div>

        <div className="pt-4 border-t">
          <Button
            onClick={resetSystem}
            variant="outline"
            size="sm"
            className="w-full"
            disabled={buffer.isProcessing}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Reset System
          </Button>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Data Loss: Clears all tasks to test recovery</p>
          <p>• Cache Failure: Tests performance without cache</p>
          <p>• Network Failure: Simulates offline mode (5s)</p>
          <p>• Buffer Processing: Tests retry mechanisms</p>
        </div>
      </CardContent>
    </Card>
  )
}
