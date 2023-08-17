//salut je veux vous remercier enormement wael pour tes efforts tout au long des cours
//et pour la bonne ambiance aucours des sessions . MERCI BEAUCOUP

//mon composant update est fonctionnel avec certains pet dans la base (comme Garfield et Doreamon ..)mais non fonctionnel avec d'autres
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState({})
    const { pet_id } = useParams()
    const navigate= useNavigate()


    // const [thePet, setThePet] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/api/pets/${pet_id}`)
            .then(res => {
                console.log(res.data.thePet)
                const {name,type,description,skills}=res.data.thePet
                setName(name)
                setType(type)
                setDescription(description)
                setSkills(skills)
            })
            .catch(err => console.log(err))
    }, [pet_id])

    


    const updateHandler = (e) => {
        e.preventDefault()

        const updatePet = {
            name,
            type,
            description,
            skills
       
        }
        axios.put(`http://localhost:5000/api/pets/${pet_id}`, updatePet)
            .then(res => {
                console.log(res.data)
                
                navigate("/")
                
            })
            .catch(err => {
                
                console.log(err)
            })
    }
    return (
        <div>
            <p style={{ width: 300 }}>Edit {name}</p>
           

            <form onSubmit={updateHandler } >
                <div style={{ display: 'flex' }}  >
                    <div style={{ flex: '1', width: '50%' }}>
                        <p><label>Pet Name:</label></p>
                        <p><input onChange={e => { setName(e.target.value) }} value={name}/></p>

                        <p><label>Pet Type:</label></p>
                        <p><input onChange={e => { setType(e.target.value) }}value={type} /></p>

                        <p><label>Pet Description:</label></p>
                        <p><input onChange={e => { setDescription(e.target.value) }}value={description} /></p>
                    </div>

                    <div style={{ flex: '1', width: '50%' }}>

                        <p>Skills (optional)</p>

                        <p><label>Skill 1:</label></p>

                        {/* <p><input onChange={e => { setSkills({ ...skills, skill1: (e.target.value) }) }}value={skills.skill1}  /></p> */}
                        <p><input onChange={e => { setSkills({ ...skills, skill1: (e.target.value) }) }}value={skills.skill1}  /></p>

                        <p><label>Skill 2:</label></p>
                        <p><input onChange={e => { setSkills({ ...skills, skill2: (e.target.value) }) }} value={skills.skill2}/></p>

                        <p><label>Skill 3:</label></p>
                        <p><input onChange={e => { setSkills({ ...skills, skill3: (e.target.value) }) }} value={skills.skill3}/></p>

                    </div>
                </div>
                <input type='submit' value='Edit Pet' style={{backgroundColor:"blue", color:"white"}} />
            </form>


        </div>
    )
}

export default Update