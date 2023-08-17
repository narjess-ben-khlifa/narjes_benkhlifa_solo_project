import { useState } from "react"
import './App.css';
import Main from './views/Main'
import { Routes,Route} from "react-router-dom"
// import Dashbordd from './components/Dashbordd';
// import Form from './components/Form';
import Details from "./components/Details";

import ABook from "./views/ABook";
import Connect from "./views/Connect";



function App() {
  const [refreshState,setRefreshState]=useState(false)

const refresh=()=>{
  setRefreshState(!refreshState)
}

  return (
    <div className="App" >
     
      
      <Routes>
        <Route path="/" element ={<Connect/>}/>  
        <Route path="/books" element ={<Main/>}/>   
          
        <Route path="/books/:book_id" element ={<ABook/>}/>
        {/* <Route path="/books/:book_id" element ={<abook/>}/> */}



        

         {/* // refresh={refresh} refreshState={refreshState}/>} /> */}
     {/* <Dashbordd refresh={refresh} refreshState={refreshState}/> */}
     <Route path="/pets/:pet_id" element={<Details refresh={refresh}  />}/>
     {/* <Route path="/pets/new" element ={ <Form refresh={refresh}/>}/> */}
     

     </Routes>
    </div>
  );
}

export default App;
