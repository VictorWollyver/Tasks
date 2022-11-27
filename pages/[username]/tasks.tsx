import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ImageFilter from '../../assets/filter_alt_FILL1_wght400_GRAD0_opsz48.svg'

import HeaderDashboard from '../../Components/HeaderDashboard/HeaderDashboard'
import TasksList from '../../Components/TasksList/TasksList'
import ModalAddTask from '../../Components/ModalAddTask/ModalAddTask'
import Container from '../../styles/Container.styled'
import ModalTaskDetails from '../../Components/TasksList/ModalTaskDetails/ModalTaskDetails'
import TaskContext, { TaskContextType } from '../../context/TaskContext'

type Filters = 'Progressing' | 'None' | 'Completed';

const Tasks = () => {
  const { tasks } = React.useContext(TaskContext) as TaskContextType
  const [modal, setModal] = React.useState(false);
  const [menuFilter, setMenuFilter] = React.useState(false)
  const [filter, setFilter] = React.useState<Filters>('None')
  const [modalTaskDetails, setModalTaskDetails] = React.useState<Task | false>(false)
  const router = useRouter()
  const username = router.query.username

  function activeFilter(filter: Filters) {
    setFilter(filter)
    setMenuFilter(false)
  }
 
  return (
      <Container active={menuFilter}>
        {modal && <ModalAddTask setModal={setModal} />}
        {modalTaskDetails && <ModalTaskDetails setModalTaskDetails={setModalTaskDetails} modalTaskDetails={modalTaskDetails} />}
        <HeaderDashboard username={username} setModal={setModal} length={tasks ? tasks.length : 0} />
        <div className='containerList'>
          <button onClick={() => setMenuFilter(!menuFilter)}><Image src={ImageFilter} width='20px' height='20px'  alt='SVG filter'></Image>Filter</button>
          <ul>
            <li onClick={() => activeFilter('None')}>None</li>
            <li onClick={() => activeFilter('Completed')}>Completed</li>
            <li onClick={() => activeFilter('Progressing')}>Progressing</li>
          </ul>
          <TasksList setModalTaskDetails={setModalTaskDetails} filter={filter}  />
        </div>
      </Container>
  )
}

export default Tasks