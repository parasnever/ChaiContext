import React, { useState, useContext}from 'react'
import UserContext from '../context/Usercontext'

function Login() {

    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)








    const handleSubmit =(e) =>{
        e.preventDefault()
        setUser({userName, password})

    }
  return (
    <div>
            <h2>Login</h2>
            <input type="text"
             placeholder='username'
             value={userName} 
            
            onChange={(e)=>setUserName(e.target.value)}/>
            
            {" "}
            <input type="text" 
            placeholder='password'
          
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>


        
    </div>
  )
}

export default Login