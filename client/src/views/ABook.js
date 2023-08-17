import React from 'react'
import UpdateBook from '../components/UpdateBook'
import OneBook from '../components/OneBook'
import {Link } from "react-router-dom"

const ABook = () => {
    

   
  return (
    
        <div>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px',color: '#3498db' }}>
    <h1>Welcome, User</h1>
    <div>
      <div><Link to="/"  style={{
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ff0000', 
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}>Log Out</Link></div>
    </div>
  </div>
     

    <UpdateBook/>
    <OneBook/>

    </div>
  )
}

export default ABook