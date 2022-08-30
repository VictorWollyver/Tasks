import React from 'react'
import ContainerInput from './InputAddTask.styled';

interface InputAddTaskProps {
  type: string;
  label: string;
  messageError: string | undefined;
  id: string
  onChange: () => void;
  value: string
}

const InputAddTask = ({ type, label, messageError, id, onChange, value}: InputAddTaskProps) => {
  return (
    <ContainerInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={onChange} value={value} />
      <p className='messageError'>{messageError}</p>
    </ContainerInput>
  )
}

export default InputAddTask