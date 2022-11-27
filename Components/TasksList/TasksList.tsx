import React from 'react'
import TableTasks from './TableTasks.styled'
import TaskItem from '../TasksList/TaskItem'
import {TaskContext, TaskContextType } from '../../context/TaskContext'

interface ITasksListProps {
  setModalTaskDetails: React.Dispatch<React.SetStateAction<Task | false>>;
  filter: 'Progressing' | 'None' | 'Completed'
}

const TasksList = ({ setModalTaskDetails, filter }: ITasksListProps) => {
  const { getTasks, tasks} = React.useContext(TaskContext) as TaskContextType
  let tasksFiltred

  if (filter == 'Completed') {
    tasksFiltred = tasks.filter(({ status }) => status == true )
  } else if(filter == 'Progressing') {
    tasksFiltred = tasks.filter(({ status }) => status == false )
  } else {
    tasksFiltred = tasks
  }

  React.useEffect(() => {
    getTasks()
  }, [getTasks])

  if(tasksFiltred)
    return (
      <TableTasks>
        <tr>
          <th>Name</th>
          <th className='description-title'>Description</th>
          <th>Status</th>
        </tr>
        {tasksFiltred.map((task, index) => <TaskItem task={{...task, index}} key={index} setModalTaskDetails={setModalTaskDetails} /> )}
      </TableTasks>
    )
  else return <div>Sem tasks</div>
}

export default TasksList