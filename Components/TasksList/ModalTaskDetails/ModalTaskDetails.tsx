import React from 'react'
import BgModal from './ModalTaskDetails.styled'
import Image from 'next/image'
import close from '../../../assets/close.svg'
import { TaskContext, TaskContextType} from '../../../context/TaskContext';

interface IProps {
  setModalTaskDetails: React.Dispatch<React.SetStateAction<Task | false>>
  modalTaskDetails: Task;
}

const ModalTaskDetails = ({ modalTaskDetails: { _id, description, index, name, status }, setModalTaskDetails } : IProps) => {
  const { deleteTask, updateTask, error, loading } = React.useContext(TaskContext) as TaskContextType

  function handleDelete() {
    deleteTask(index)
    !error && setModalTaskDetails(false)
  }

   function handleUpdate() {
    updateTask(index)
    !error && setModalTaskDetails(false)
  }

  return (
    <BgModal>
      <section className='modal'>

        <header>
          <div>
            <h1>{name}</h1>
            <span onClick={() => setModalTaskDetails(false)}> <Image src={close} alt="botao close" /> </span>
          </div>
          <h2 className='created-data'>Created: 02/04/2022</h2>
        </header>

        <div className='description'>
          <h2>Description:</h2>
          <p>{description}</p>
        </div>

        { loading? <button className='delete' type='submit' disabled>Deletando...</button> : <button className='delete' type='submit' onClick={ () => handleDelete() }>Delete</button> }

        { !status && <button className='update' type='submit' onClick={ () => handleUpdate() }>Completar</button>}

        { error && <p className='error'>{error.message}</p> }
      </section>
    </BgModal>
  )
}

export default ModalTaskDetails