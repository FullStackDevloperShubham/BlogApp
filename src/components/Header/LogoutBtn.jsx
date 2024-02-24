import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'


function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
    }


    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn