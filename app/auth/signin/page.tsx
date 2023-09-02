'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

type User = {
    email:String,
    password:String
}

const signIn = () => {

const router = useRouter()

const [user,setUser] = useState<User>({
    email:'',
    password:''
})    

const handleUser = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setUser(prev => ({...prev,[e.target.name]:e.target.value}))
    // console.log(user);
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()

    router.push('/auth/login')
}

return (
    <div>
            <form className="space-y-4 p-20" onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="w-full input input-bordered" name='email'
                    onChange={handleUser}/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        className="w-full input input-bordered" name='password' onChange={handleUser}/>
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button type='submit' className="btn btn-block">Login</button>
                </div>
            </form>
    </div>
  )
}

export default signIn
