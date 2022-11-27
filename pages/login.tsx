import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


import LoginStyle from '../styles/login/login.styles'
import Image from 'next/image'
import imageLogin from '../assets/loginjpg4x.jpg'

import Input from '../Components/InputUser/InputUser'
import { useForm } from 'react-hook-form'
import useFetch from '../Hooks/useFetch'

interface FormData {
  name: string;
  email: string
  password: string;
};

const Login = () => {
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>()
	  const { request, loading, error } = useFetch()
	  const router = useRouter()

    return (
        <LoginStyle>
            <Image src={imageLogin} alt='Image Login' />

            <form onSubmit={handleSubmit(async (data) => {
				        const { json, response } = await request('post', '/user/login', data)
                if (response?.statusText) {
                  window.localStorage.token = json.token; 
                  router.push(data.name + '/tasks')
                }
						    
			      })}>

                <h2>Login</h2>

                <Input label='Name' id='name' type='text' register={register} errors={errors.name}/>  

                <Input label='Password' id='password' type='password' register={register} errors={errors.password} minLength={8}/>     
                <a href="" className='forget'>Forget Password?</a>

                { loading? <button disabled>Logando...</button> : <button>Login</button>  }

                <p className='error'>{error}</p>

                <Link href="/create">dont have an account?</Link>
            </form>
    </LoginStyle>
  )
}

export default Login