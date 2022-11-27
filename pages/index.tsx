import Image from 'next/image'
import React from 'react'
import Tasks from '../assets/tasksLogo.svg'
import Home from '../styles/Home.styled'
import Link from 'next/link'



const LoginHome = () => {

  return (
      <Home>
        <Image src={Tasks} alt='Logo da marca Tasks' />
        <p className='description'>manage your tasks and complete your goals</p>
        <Link href={'/create'} passHref >
          <button className='buttonLogin'>Create Account</button>
        </Link>
        <p className='link'>Ou faça <Link href={'/login'}>Login</Link></p>
      </Home>
  )
}

export default LoginHome