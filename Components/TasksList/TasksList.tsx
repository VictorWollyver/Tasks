import React from 'react'
import ListTasksStyle from './TasksList.styled'
import TaskItem from '../TasksList/TaskItem'

interface Task {
  id: number;
  title: string;
  description: string;
  setModalTaskDetails: Function;
}

const TasksList = ({ tasks, setModalTaskDetails }: Task[]) => {
  
  
  if(tasks)
    return (
      <ListTasksStyle>
        {tasks.map(({id, title, description}) => <TaskItem key={id} title={title} description={description} setModalTaskDetails={setModalTaskDetails} /> )}
      </ListTasksStyle>
    )
  else return <div>Sem tasks</div>
}

export default TasksList