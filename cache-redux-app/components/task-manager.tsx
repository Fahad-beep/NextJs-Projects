"use client"

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { addTask, updateTask, deleteTask } from '@/lib/slices/tasksSlice'
import { setCache } from '@/lib/slices/cacheSlice'
import { addToBuffer } from '@/lib/slices/bufferSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Trash2, Edit, Plus, Save, X } from 'lucide-react'

export default function TaskManager() {
  const dispatch = useDispatch()
  const { tasks, isDirty, lastSync } = useSelector((state: RootState) => state.tasks)
  const [newTask, setNewTask] = useState({ title: '', description: '' })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ title: '', description: '' })

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const taskData = {
        title: newTask.title,
        description: newTask.description,
        completed: false,
      }
      
      dispatch(addTask(taskData))
      dispatch(setCache({ key: `task_${Date.now()}`, data: taskData }))
      dispatch(addToBuffer({ action: 'CREATE_TASK', data: taskData }))
      
      setNewTask({ title: '', description: '' })
    }
  }

  const handleUpdateTask = (id: string, updates: any) => {
    dispatch(updateTask({ id, updates }))
    dispatch(setCache({ key: `task_${id}`, data: updates }))
    dispatch(addToBuffer({ action: 'UPDATE_TASK', data: { id, updates } }))
  }

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id))
    dispatch(addToBuffer({ action: 'DELETE_TASK', data: { id } }))
  }

  const startEdit = (task: any) => {
    setEditingId(task.id)
    setEditForm({ title: task.title, description: task.description })
  }

  const saveEdit = () => {
    if (editingId) {
      handleUpdateTask(editingId, editForm)
      setEditingId(null)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({ title: '', description: '' })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Task Manager
            <div className="flex items-center gap-2">
              {isDirty && <Badge variant="destructive">Unsaved Changes</Badge>}
              {lastSync && (
                <Badge variant="outline">
                  Last Sync: {new Date(lastSync).toLocaleTimeString()}
                </Badge>
              )}
            </div>
          </CardTitle>
          <CardDescription>
            Add, edit, and manage your tasks with automatic state persistence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 p-4 border rounded-lg bg-muted/50">
            <Input
              placeholder="Task title..."
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <Textarea
              placeholder="Task description..."
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <Button onClick={handleAddTask} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <Card key={task.id} className="p-4">
                {editingId === task.id ? (
                  <div className="space-y-3">
                    <Input
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    />
                    <Textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    />
                    <div className="flex gap-2">
                      <Button onClick={saveEdit} size="sm">
                        <Save className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                      <Button onClick={cancelEdit} variant="outline" size="sm">
                        <X className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={(checked) =>
                          handleUpdateTask(task.id, { completed: checked })
                        }
                      />
                      <div className="flex-1">
                        <h3 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </h3>
                        {task.description && (
                          <p className={`text-sm text-muted-foreground mt-1 ${task.completed ? 'line-through' : ''}`}>
                            {task.description}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          Created: {new Date(task.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => startEdit(task)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteTask(task.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
            
            {tasks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No tasks yet. Add your first task above!
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
