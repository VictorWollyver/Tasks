
import React from 'react'

interface TaskItemProps {
  task: Task
  setModalTaskDetails: React.Dispatch<React.SetStateAction<Task | false>>

}

const TaskItem = ({ task, setModalTaskDetails }: TaskItemProps ) => {

  return (
    <tr onClick={() => setModalTaskDetails(task)}>
      <td>{task.name}</td>
      <td className='description'>{task.description.substring(0, 15) + '...'}</td>
      { task.status? <td style={{ color: 'green'}}>Completed</td> : <td style={{ color: 'red'}}>Progressing</td> }
    </tr>
  )
}

export default TaskItem