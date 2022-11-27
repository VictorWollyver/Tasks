import axios, { Axios, AxiosError } from 'axios';
import React from 'react'
import useFetch from '../Hooks/useFetch';
import { headers } from '../next.config';
import { api } from '../src/api';


export type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  error: AxiosError<{message: string}> | null;
  loading: boolean
  deleteTask: (index: number) => void;
  getTasks: () => void;
  postTask: (data: Task) => void;
  updateTask: (index: number) => void
};

export const TaskContext = React.createContext<TaskContextType | null>(null);


export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<AxiosError | null>(null);
  const { request } = useFetch()

  async function deleteTask(index: number) {
    const token = window.localStorage.token
    try {
      setError(null)
      setLoading(true)
      const response = await api.delete('/tasks/delete/' + index, token && { headers: { Authorization: 'Bearer ' + token } } )
      const json = response.data
      setTasks(json)
    } catch (error: any) {
      setError(error)

    } finally {
      setLoading(false)
    }
  }

  async function updateTask(index: number) {
    const token = window.localStorage.token
    try {
      setError(null)
      setLoading(true)
      const response = await api.put('/tasks/update/' + index, {} , token && { headers: { Authorization: 'Bearer ' + token } })
      const json = response.data
      setTasks(json)
    } catch (error: any) {
      setError(error)

    } finally {
      setLoading(false)
    }
  }

  const getTasks = React.useCallback(async () => {
    const token = window.localStorage.token
    try {
      setError(null)
      setLoading(true)
      const response = await api.get('/tasks', token && { headers: { Authorization: 'Bearer ' + token } })
      const json = response.data
      if (!response.statusText) throw new Error()
      setTasks(json)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  async function postTask(data: Task) {
    const token = window.localStorage.token
      try {
        setError(null)
        setLoading(true)
        const response = await api.post('/tasks/post', data, token && { headers: {Authorization: 'Bearer ' + token } })
        if (!response.statusText) throw new Error()
        setTasks(response.data)
      } catch (error) {
        const err = error as AxiosError
        setError(err)
      } finally {
        setLoading(false)
      }
  }

  

   return (
    <TaskContext.Provider value={{ tasks, deleteTask, getTasks, postTask, updateTask, error, loading, setTasks  }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext