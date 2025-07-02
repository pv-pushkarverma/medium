import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "./InputBox"
import { useState } from "react"
import type { SignupInput } from "@pushkar_verma/medium-common"
import axios from "axios"
import { toast } from "react-toastify"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Auth = ({ type }: {type: 'signin' | 'signup'}) => {
    const navigate = useNavigate();

    const [ postInputs, setPostInputs ] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest():Promise<void> {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${ type === 'signup' ? 'signup' : 'signin'}`,postInputs);
            const jwt = response.data;
            localStorage.setItem('token',jwt.token);
            const text = type === 'signin' ? 'Signin' : 'Signup'
            toast.success(`${text} successfull`)
            navigate('/blogs')
        } catch (error) {
            toast.error(error instanceof Error ? error.message : String(error))
        }
    }

    return <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center">

            <div className="text-center px-10">
                <div className="text-3xl font-bold"> { type === "signup" ? 'Create an account' : 'Login to your account'} </div>
                <div className="text-gray-500 mt-1.5"> { type === 'signup' ? 'Already have an account? ' : 'Dont have an account? '} <Link to={ type === 'signup' ? '/signin' : '/signup'} className="underline"> { type === 'signup' ? 'Sign In' : 'Create Account'} </Link></div>
            </div>

            <div className="flex flex-col justify-start w-full mt-2.5">
            { type ==='signup' ? <InputBox label="Username" placeholder="Enter your username" onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    name: e.target.value
                }))
            }}/> : null }
            <InputBox label="Email" placeholder="m@gmail.com" onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    email: e.target.value
                }))
            }}/>
            <InputBox label="Password" type="password" placeholder="" onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    password: e.target.value
                }))
            }}/>
            </div>

            <button onClick={sendRequest} className="w-full bg-black text-white p-2 mt-4 rounded-md hover:cursor-pointer"> { type === 'signup' ? 'Sign Up' : 'Sign In' } </button>
        </div>
    </div>
}