import React, { useState } from 'react'
import LogIn from '../components/LogIn'
import Registration from '../components/Registration'

const Connect = () => {
  const [refreshState, setRefreshState]=useState(false)

  const refresh =()=>{
    setRefreshState(!refreshState)
  }
  return (
    <div >
      <div
        style={{
          color: '#3498db', // Couleur tendance (vert émeraude)
          fontSize: '48px', // Taille de police plus grande
          fontFamily: 'Cursive, sans-serif', // Police élégante pour un aspect esthétique
          letterSpacing: '1px',
          textAlign: 'center',
          margin: '20px 0', // Espacement autour du titre
          textTransform: 'uppercase',
          fontWeight: 'bold',
        
        }}
      >
        Book Club
      </div> 
      <div style = {{display:'flex'}}>
        <div style={{flex:'1',width:'50%',color: '#3498db'}}><Registration refresh={refresh}/></div>
        <div style={{flex:'1',width:'50%',color: '#3498db'}}><LogIn/></div>
        </div>
    </div>
  )
}

export default Connect