

import React, { useState } from 'react'
// import axios from 'axios'

import { Link } from 'react-router-dom'

const LogIn = () => {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

   
    

  return (
    <div>
        <h1>Login</h1>
        
<form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ width: '50%', backgroundColor: '#f9f9f9' }}>
    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' ,margin:'10px'}}>
      <label style={{ width: '100px' }}>Email:</label>
      <input onChange={e => { setEmail(e.target.value) }} style={{ width: '100%',padding: '10px',margin:'10px', borderRadius: '5px', border: '1px solid #ddd' }} />
    </p>
    <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <label style={{ width: '100px' }}>Password:</label>
      <input type="password" onChange={e => { setPassword(e.target.value) }} style={{ width: '100%',padding: '10px',margin:'10px', borderRadius: '5px', border: '1px solid #ddd' }} />
    </p>
    <p className='pbtn'>
      <Link to="/books">
        <input type='submit' value='Log In' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#007bff', color: '#ffffff', padding: '10px 20px',margin:'10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} />
      </Link>
    </p>
  </div>
</form>



    </div>
  )
}

export default LogIn