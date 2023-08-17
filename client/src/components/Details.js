import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Details = (props) => {
    const [thePet, setThePet] = useState({})
    const [likes,setLikes]=useState(0)

    
    const { pet_id } = useParams()
    const{refreshState,refresh}=props

    useEffect(() => {
        axios.get(`http://localhost:5000/api/pets/${pet_id}`)
            .then((res) => {
                console.log(res.data.thePet)
                setThePet(res.data.thePet)
            })
            .catch((err )=>{ console.log(err)})
    },[pet_id])
    const deleteHandler=(id_delete)=>{
        axios.delete(`http://localhost:5000/api/pets/${id_delete}`)
        .then(res=>{refresh()})
        .catch(err=>{
            console.log(err)
        })
    }
    const countLikes=(()=>{
        setLikes(likes+1)
    })
    return (
        <div>
           
            {
            (thePet) ?
                <div>
                    <p>Details about: {thePet.name}</p>
                    <button onClick={deleteHandler(thePet._id)} style={{backgroundColor:"red", color:"white"}}>Adopt {thePet.name}</button>
                    <p>Pet type: {thePet.type}</p>
                    <p>Description: {thePet.description}</p>
                    <p>Skills: {JSON.stringify(thePet.skills)}</p>
                    
                    {/* <button onClick={countLikes} value="Adopt" style={{backgroundColor:"green", color:"white"}}>Like {thePet.name}</button>    */}
                    <button onClick={countLikes} style={{backgroundColor:"green", color:"white"}}>Like {thePet.name}</button>
        {likes} like(s)
                    </div > 
                    :"loading..."
                    }
                    {/* <input type='submit' onClick={deleteHandler(pet_id)} value='Adopt' /> */}
                    
                    {/* <input onClick={deleteHandler(thePet._id)} type='submit' value="Adopt" style={{backgroundColor:"red", color:"white"}} /> */}
        </div>
                
  )
}

            export default Details