import Image from 'next/image'
import React from 'react'
import Tasks from '../assets/tasksLogo.svg'
import InputAddTask from '../Components/InputAddTask/InputAddTask'
import LoginButton from '../Components/LoginButton/LoginButton'
import LoginSection from '../styles/Index.styled'
import { FormikProvider, useFormik } from 'formik'
import useFormikHook from '../Hooks/useFormikHook'
import FormLogin from '../styles/formLogin.styled'
import Home from '../styles/Home.styled'



const LoginHome = () => {
  const [form, setForm] = React.useState(false)
  const [stateHome, setStateHome] = React.useState(false)
  const formik = useFormikHook({ email:'', senha:'' })
  console.log(formik)
  console.log(form)

  function alterStateHome() {
    setTimeout(() => {
      setStateHome(!stateHome)
    },1000)
  }



  return (
    <LoginSection>
      <FormLogin className='login' state={form}>
        <div className='message'>
          an easier way to organize your day to day
        </div>
        <form onSubmit={formik.handleSubmit}>
          <InputAddTask type='email' label='Insira seu Email' id='email' onChange={formik.handleChange} value={formik.values.email} />
          <InputAddTask type='password' label='Insira sua senha' id='senha' onChange={formik.handleChange} value={formik.values.senha}  />
          <button className='entrar'>Entrar</button>
          
          <a href="">Não possui Conta?</a>
        </form>
      </FormLogin>
      
      <Home state={stateHome}>
        <Image src={Tasks} alt='Logo da marca Tasks' />
        <p>manage your tasks and complete your goals</p>
        <button className='openFormLogin' onClick={() => { setForm(!form); alterStateHome()}}>Começar</button>
      </Home>
    </LoginSection>
  )
}

export default LoginHome