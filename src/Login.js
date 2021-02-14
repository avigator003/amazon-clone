import React, { useState } from 'react'
import "./Login.css"
import {Link,useHistory} from 'react-router-dom'
import { auth } from './Database';

function Login() {
    const history=useHistory();
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const signin=e=>{
e.preventDefault();

auth.signInWithEmailAndPassword(email,password)
.then(history.push("/"))
.catch(error=>{console.log(error.message)})


}

const register=e=>{
e.preventDefault();
auth.createUserWithEmailAndPassword(email,password)
.then(authUser=>{
    console.log("Authenticated User",authUser)

    .catch(error=>{console.log(error.message)})
})

}


    return (
        <div className="login">
            <Link to="/">
<img className="login__logo" src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"/></Link>
<div className="login__container">

            <h1>Sign In</h1>
            <form>
              <h5>E-mail</h5>
               <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
               <h5>Password</h5>
               <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
               <button onClick={signin}>Sign In</button>
            </form>
<p>By continuing, you agree to Amazon's Fake Clone 
    Conditions of Use and Privacy Notice.</p>
<button className="signup__button" onClick={register}> Sign Up For Your Account</button>
</div>
        </div>
    )
}

export default Login
