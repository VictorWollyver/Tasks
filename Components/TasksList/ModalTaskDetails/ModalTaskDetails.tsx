import React from 'react'
import BgModal from './ModalTaskDetails.styled'
import Image from 'next/image'
import close from '../../../assets/close.svg'

interface Task {
  title: string;
  description: string;
}

interface modalTaskDetailsProps {
  modalTaskDetails: Task[]
  setModalTaskDetails: Function
}

const ModalTaskDetails = ({ modalTaskDetails, setModalTaskDetails }: modalTaskDetailsProps) => {

const { title, description } = modalTaskDetails

  return (
    <BgModal>
      <section className='modal'>
        <header>
          <div>
            <h1>{title}</h1>
             <span onClick={() => setModalTaskDetails(null)}> <Image src={close} alt="" /> </span>
          </div>
          <h2>Created: 02/04/2022</h2>
        </header>
        <form action="">
          <label htmlFor="description">Description:</label>
          <input type="text" id='description' value={description} />
          <div>
            <button className='delete'>Delete</button>
            <button className='update'>Update</button>
          </div>
        </form>
      </section>
    </BgModal>
  )
}

export default ModalTaskDetails