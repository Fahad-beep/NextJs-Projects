"use client"

import { Provider } from 'react-redux'
import { store } from '@/lib/store'
import TaskManager from '@/components/task-manager'
import SimulationPanel from '@/components/simulation-panel'
import CacheStatus from '@/components/cache-status'
import PersistenceStatus from '@/components/persistence-status'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Next.js Cache & Redux Buffer System
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Complete application with state persistence, caching, and data loss recovery
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TaskManager />
            </div>
            
            <div className="space-y-6">
              <CacheStatus />
              <Separator />
              <PersistenceStatus />
              <Separator />
              <SimulationPanel />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}
