
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { DateTime } from 'luxon';

// import {Link } from "react-router-dom"

const OneBook = (props) => {
  const [theBook, setTheBook] = useState({})
  const { User, setUser, refresh } = props
  const { book_id } = useParams()
  const [description, setDescription] = useState('');
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  // const{refreshState,refresh}=props

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${book_id}`)
      .then(res => {
        console.log(res.data.theBook)
        setTheBook(res.data.theBook)
        setDescription(res.data.theBook.description)
      })
      .catch(err => {
        console.log(err)
      })

  }, [book_id])

  const UpdateHandler=(e)=>{
    const newBook={
      
      description
    }
    axios.put(`http://localhost:5000/api/books/${book_id}`,newBook)
    .then(res =>{
      refresh()
      setDescription("")
    })
  }

  // const deleteHandler=(id_delete)=>{
  //     axios.delete(`http://localhost:5000/api/books/${id_delete}`)
  //     .then(res=>{refresh()})
  //     .catch(err=>{
  //         console.log(err)
  //     })
  // }


  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>

      {(theBook) ?
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3 style={{ marginBottom: '10px' }}>{theBook.title}</h3>
          <p> Added by: </p>
          <p>Added on: {DateTime.fromISO(theBook.createdAt).toLocaleString(DateTime.DATETIME_MED)}</p>
          <p>Description:</p>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            style={{ width: '100%', minHeight: '100px', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <button style={{
            marginRight: '10px', backgroundColor: '#007bff', color: '#ffffff', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
          }} onClick={UpdateHandler}>Update</button>
          <button style={{
            backgroundColor: '#ff0000', color: '#ffffff', padding: '8px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
          }}>Delete</button>
        </div> : null}



    </div>
  )
}

export default OneBook