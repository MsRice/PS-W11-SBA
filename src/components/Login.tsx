import React, { useState } from 'react';
import { useAuthentication } from '../contexts/auth/AuthenticationContect';

const Login = () => {
    
    const {login} = useAuthentication()

    const [id , setId] = useState(0)
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')


    function handleForm(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const userData = {id , username , password }
        login(userData)
        setId(p => p + 1)
    }
    
    return (
        <div className="login-form--wrapper">
            <form className="login-form" onSubmit={handleForm}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username"  value={username} onChange ={e => setUsername(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password"  value={password} onChange ={e => setPassword(e.target.value)}/>

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
