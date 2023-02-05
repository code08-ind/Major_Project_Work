import React from 'react'
import '../styles/Login.css'

const Login = () => {
    return (
        <div className='container1'>
            <h1>Login To Portal</h1>
            <form action="">
                <input type="text" placeholder='Enter Admin Email' />
                <input type="password" placeholder='Enter Admin Password' />
                <button className='add'>Login</button>
            </form>
        </div>
    )
}

export default Login