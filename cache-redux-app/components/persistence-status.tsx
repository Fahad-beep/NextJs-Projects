"use client"

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { persistenceUtils } from '@/lib/utils/persistence'
import { HardDrive, Download, Upload, Trash2 } from 'lucide-react'

export default function PersistenceStatus() {
  const [storageSize, setStorageSize] = useState<number>(0)
  const [lastSaved, setLastSaved] = useState<string | null>(null)
  const state = useSelector((state: RootState) => state)

  useEffect(() => {
    const calculateStorageSize = () => {
      if (typeof window === 'undefined') return
      
      try {
        const serializedState = localStorage.getItem('app-state')
        if (serializedState) {
          const sizeInBytes = new Blob([serializedState]).size
          setStorageSize(sizeInBytes)
        }
      } catch (error) {
        console.warn('Failed to calculate storage size:', error)
      }
    }

    calculateStorageSize()
    setLastSaved(new Date().toLocaleTimeString())

    const interval = setInterval(calculateStorageSize, 1000)
    return () => clearInterval(interval)
  }, [state])

  const exportState = () => {
    const dataStr = JSON.stringify(state, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `app-state-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const importState = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          try {
            const importedState = JSON.parse(e.target?.result as string)
            persistenceUtils.saveState('app-state', importedState)
            window.location.reload() // Reload to apply imported state
          } catch (error) {
            console.error('Failed to import state:', error)
            alert('Invalid state file')
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const clearStorage = () => {
    if (confirm('Are you sure you want to clear all stored data?')) {
      persistenceUtils.clearAllState()
      window.location.reload()
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HardDrive className="w-5 h-5" />
          Persistence Status
        </CardTitle>
        <CardDescription>
          Local storage and state management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 border rounded-lg">
            <div className="text-lg font-bold text-purple-600">{formatBytes(storageSize)}</div>
            <div className="text-xs text-muted-foreground">Storage Used</div>
          </div>
          <div className="text-center p-3 border rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {lastSaved ? lastSaved : 'Never'}
            </div>
            <div className="text-xs text-muted-foreground">Last Saved</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Tasks:</span>
            <Badge variant="outline">{state.tasks.tasks.length}</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>Cache Entries:</span>
            <Badge variant="outline">{Object.keys(state.cache.entries).length}</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span>Buffer Entries:</span>
            <Badge variant="outline">{state.buffer.entries.length}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={exportState} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          <Button onClick={importState} variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-1" />
            Import
          </Button>
        </div>

        <Button onClick={clearStorage} variant="destructive" size="sm" className="w-full">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Storage
        </Button>
      </CardContent>
    </Card>
  )
}
