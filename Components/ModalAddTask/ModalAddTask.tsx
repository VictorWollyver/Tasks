import React from 'react'
import FormModalTask from '../FormModalAddTask/FormModalAddTask'
import ContainerModal from './ModalAddTask.styled'

interface ModalAddTaskProps  {
  setModal: Function,
  activeModalAlert: Function
  setTasks: Function
}



const ModalAddTask = ({setModal, activeModalAlert, setTasks}:ModalAddTaskProps) => {

  function handleCloseModal(event:React.FormEvent) {
    if (event.target === event.currentTarget) {
      setModal((modal:boolean) => !modal)
  }
}

  return (
    <ContainerModal onClick={handleCloseModal}>
      <div className='modal'>
        <FormModalTask setModal={setModal} activeModalAlert={activeModalAlert} setTasks={setTasks} />
      </div>
    </ContainerModal>
  )
}

export default ModalAddTask