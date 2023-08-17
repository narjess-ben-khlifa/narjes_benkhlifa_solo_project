import React, { useState } from 'react'
import axios from "axios"

const AddBook = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { refresh } = props

    const submitHandler = (e) => {
        e.preventDefault()
        const newBook = {
            title,
            description
        }
        axios.post("http://localhost:5000/api/books", newBook)
            .then(res => {
                console.log(res)
                refresh()
                setTitle("")
                setDescription("")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div><h3>Add A New Book</h3>
            {/* <form onSubmit={submitHandler}>
            <div><label>Title:</label></div>
            <div><input onChange={e=>{setTitle(e.target.value)}} value={title}/></div><br/>
            <div><label>Description:</label></div>
            <div><input onChange={e=>{setDescription(e.target.value)}}value={description}/></div><br/>
            <input type="submit" value="Add"/>

        </form> */}
            <form onSubmit={submitHandler} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '300px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '80px', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>Title:</label>
                        <input onChange={e => { setTitle(e.target.value) }} value={title} style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '80px', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>Description:</label>
                        <input onChange={e => { setDescription(e.target.value) }} value={description} style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <input type='submit' value='Add' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#007bff', color: '#ffffff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddBook