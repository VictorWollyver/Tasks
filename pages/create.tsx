import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Login from '../styles/login/login.styles'

import imageLogin from '../assets/loginjpg4x.jpg'
import { useForm } from 'react-hook-form'
import Input from '../Components/InputUser/InputUser'
import useFetch from '../Hooks/useFetch'

interface FormData {
  name: string;
  email: string;
  password: string;
};


const Create = () => {
	const { register, handleSubmit, formState:{errors} } = useForm<FormData>()
	const { request, loading, error, dataJson } = useFetch()
	const router = useRouter()

	return (
		<Login>
			<Image src={imageLogin} layout='intrinsic'  alt='Image Login' />

	  		<form onSubmit={handleSubmit(async (data) => {
					try {
						const { json } = await request('post', '/user/create', data)
						window.localStorage.token = json.token
						router.push(data.name + '/tasks')
					} catch (error) {
					}
				})}>

				<h2>Create</h2>

				<Input label='Name' type='text' id='name' register={register} errors={errors.name} /> 
				
				<Input label='Email' type='email' id='email' register={register} errors={errors.email} />   

				<Input label='Password' type='password' id='password' register={register} errors={errors.password} minLength={8} />      

				{ loading? <button disabled>Criando...</button> : <button>Create Account</button>  }

				<p className='error'>{error}</p>

				<Link href="/login">Already have an account?</Link>

	  		</form>
		</Login>
  )
}

export default Create