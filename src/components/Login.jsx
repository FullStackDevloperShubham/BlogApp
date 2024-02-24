import AuthService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'

// import React from 'react'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")

        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (useForm) dispatch(authLogin({ userData }))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>Login</div>
    )
}

export default Login