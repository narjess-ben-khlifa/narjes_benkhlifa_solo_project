import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = (props) => {
    const {setUser, refresh}=props
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    
    const [errors,setErrors]=useState([])
    const navigate=useNavigate()
    

    const submitHandler = (e) => {
        e.preventDefault()

        const newUser = {
            fname,
            lname,
            email,
            password,
            cpassword
            
        }
        axios.post("http://localhost:5000/api/users", newUser)
            .then(res => {
                console.log(res)
                setFname("")
                setLname("")
                setEmail("")
                setPassword("")
                setCpassword("")
                setUser(res.data.User)
                           
                refresh()
                navigate("/")
            })
            .catch(err => {
                // console.log(err.response.data.error.errors.name.message )
                const errorRes = err.response.data.error.errors
                const errArr=[]
                console.log(errorRes)
                for(const key of Object.keys(errorRes)){
                    console.log(errorRes[key].message)
                    errArr.push(errorRes[key].message)
                }

                setErrors(errArr)
            })
    }

  return (
    <div><h1>Registration</h1>
        
        {
                errors.map((err,key)=>{
                    return(
                        <p key={key} style={{color:"red"}}>{err}</p>
                    )
                })
            }


  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={submitHandler}>
        <div style={{ width: '500px', backgroundColor: '#f9f9f9' }}>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center',margin:'10px' }}>
            <label style={{ width: '150px' }}>First Name:</label>
            <input   value={fname} onChange={e => { setFname(e.target.value) }} style={{ width: '100%',padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </p>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center',margin:'10px' }}>
            <label style={{ width: '150px' }}>Last Name:</label>
            <input value={lname} onChange={e => { setLname(e.target.value) }} style={{ width: '100%',padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </p>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center',margin:'10px' }}>
            <label style={{ width: '150px' }}>Email:</label>
            <input value={email} onChange={e => { setEmail(e.target.value) }} style={{ width: '100%',padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </p>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center',margin:'10px' }}>
            <label style={{ width: '150px' }}>Password:</label>
            <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} style={{ width: '100%',padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </p>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center',margin:'10px' }}>
            <label style={{ width: '150px' }}>Confirm Password:</label>
            <input type="password" value={cpassword} onChange={e => { setCpassword(e.target.value) }} style={{ width: '100%',padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </p>
          <p className='pbtn'>
            <input type='submit' value='Registration' className='btn2'  />
          </p>
        </div>
      </form>
    </div>

    </div>
  )
}

export default Registration