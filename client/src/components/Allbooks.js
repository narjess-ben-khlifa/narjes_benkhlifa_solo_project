import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Allbooks = (props) => {
    const [AllBooks, setAllBooks] = useState([])
    const { refreshState } = props
    const { User } = props

    useEffect(() => {
        axios.get("http://localhost:5000/api/books")
            .then((res) => {
                console.log(res.data)
                setAllBooks(res.data)

            })
            .catch((err) => { console.log(err) })
    }, [refreshState])
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '20px' }}>All Books</h3>
            {
                AllBooks.map((book)=>{
                    return <div key={book._id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                        {/* {console.log()} */}
                        <h4><Link to={("/books/"+ book._id)}>{book.title} </Link><br/></h4>
                        {/* (added by: {User.fname} {User.lname} )<br/> */}
                        this is one of your favorite<br/>
                        <Link to= {("/books/"+book._id)} type="submit" value="details">DETAILS</Link>
                        
                        </div>
                })


                }


        </div>
       





    )
}

export default Allbooks