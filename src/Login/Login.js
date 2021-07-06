import React, { useState } from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom'
import {auth} from '../firebase'

const Login = () => {
    const history=useHistory();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const login=(e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }
    const register=(e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__img"
                    src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
                    alt=""
                />
            </Link>
            <div className="login__info">
                <h1>Sign In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)}  type="email"/>
                    <h5>Password</h5>
                    <input value={password}  onChange={e=>setPassword(e.target.value)}  type="password"/>
                    <button onClick={login} type="submit" className="login__signin">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__signup">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
