import React from 'react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import InputDiv from './Input.styles';

interface FormData {
  name: string;
  email: string;
  password: string;
};

interface IInputProps {
  label: string;
  type: string;
  id: 'name' | 'email' | 'password';
  register: UseFormRegister<FormData>;
  errors?: FieldError;
  minLength?: number
}

const InputUser = ({ label, type, id, register, errors, minLength  }: IInputProps) => {
  
  return (
    <InputDiv error={errors}>
      <label htmlFor={id}>{ label }</label>
      <input type={type} id={id} {...register(id, {required: 'Esse campo é obrigatório', minLength: { value: minLength || 0, message: 'Min Length is 8'} })} />
      { errors? <p>{errors.message}</p> : <p></p>}
    </InputDiv>   
  )
}

export default InputUser