
import React from 'react'

interface TaskItemProps {
  id: number
  title: string;
  description: string;
  setModalTaskDetails: Function

}

const TaskItem = ({ title, description, setModalTaskDetails}: TaskItemProps ) => {
  const task = {
    title,
    description
  }
  return (
    <li onClick={() => setModalTaskDetails(task)}>
      <h2>{title}</h2>
      <p>teste</p>
      <p>{description}</p>
    </li>
  )
}

export default TaskItem