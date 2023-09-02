'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import { data } from 'autoprefixer';

const login = () => {

const router = useRouter()

const [user,setUser] = useState<User>({
    email:'',
    password:''
})

const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    console.log(user.email,user.password);

    const response = await fetch('/api/login',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({email:user.email,password:user.password}),
    })
    console.log(response);

    // router.push('/')
}

const handleInputs = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setUser(prev => ({...prev,[e.target.name]:e.target.value}))
}
  return (
    <div>
        <form className="space-y-4 p-20" onSubmit={handleSubmit}>
            <h1>Log In</h1>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" onChange={handleInputs} placeholder="Email Address" name='email' className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" onChange={handleInputs} placeholder="Enter Password"
                        className="w-full input input-bordered" name='password' />
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button type='submit' className="btn btn-block">Login</button>
                </div>
            </form>
    </div>
  )
}

export default login


