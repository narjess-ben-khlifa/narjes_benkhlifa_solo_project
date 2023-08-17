import React, { useState } from 'react'
import  Allbooks  from '../components/Allbooks' 
import {Link } from "react-router-dom"
import AddBook from '../components/AddBook'

const Main = () => {
  const [refreshState,setRefreshState]=useState(false)
  const [User,setUser]=useState(null)
  const refresh=()=>{
    setRefreshState(!refreshState)
  }
 
  return (
    <div>
      




<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px',color: '#3498db' }}>
    <h1>Welcome, User</h1>
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
      <div style = {{display:'flex'}}>
        <div style={{flex:'1',width:'50%',color: '#3498db'}}><AddBook User={User} setUser={setUser} refresh={refresh}/></div>
        <div style={{flex:'1',width:'50%',color: '#3498db'}}><Allbooks User={User} refresh={refresh} refreshState={refreshState}/></div>
        
    </div>
        
    </div>
  )
}

export default Main