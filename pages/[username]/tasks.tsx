import React from 'react'
import HeaderDashboard from '../../Components/HeaderDashboard/HeaderDashboard'
import HeaderList from '../../Components/TasksList/TasksListHeader/HeaderList'
import TasksList from '../../Components/TasksList/TasksList'
import ModalAddTask from '../../Components/ModalAddTask/ModalAddTask'
import ModalAlert from '../../Components/ModalAlertAddTask/ModalAlertAddTask'
import Container from '../../styles/Container.styled'
import { useRouter } from 'next/router'
import ModalTaskDetails from '../../Components/TasksList/ModalTaskDetails/ModalTaskDetails'

interface Task {
  id: number;
  title: string;
  description: string;
}

const Tasks = () => {
  const [modal, setModal] = React.useState(false);
  const [modalAlert, setModalAlert] = React.useState(false)
  const [modalTaskDetails, setModalTaskDetails] = React.useState(null)
  const [tasks, setTasks] = React.useState<Task[]>([])
  const { query: { username }} = useRouter()


  React.useEffect(() => {

    async function getTasks() {
      const response = await fetch('http://localhost:3000/tasks')
      const json = await response.json()

      setTasks(json)
    }

    getTasks()
  }, [])

  function activeModalAlert() {
    setModalAlert(true)
    setTimeout(() => {
      setModalAlert(false)
    }, 3000)
  }

  return (
      <Container>
        {modal && <ModalAddTask setModal={setModal} activeModalAlert={activeModalAlert} setTasks={setTasks} />}
        {modalAlert && <ModalAlert />}
        {modalTaskDetails && <ModalTaskDetails modalTaskDetails={modalTaskDetails} setModalTaskDetails={setModalTaskDetails} />}
        <HeaderDashboard username={username} setModal={setModal} length={tasks.length} />
        <div className='containerList'>
          <HeaderList />
          <TasksList tasks={tasks} setModalTaskDetails={setModalTaskDetails}  />
        </div>
      </Container>
  )
}

export default Tasks