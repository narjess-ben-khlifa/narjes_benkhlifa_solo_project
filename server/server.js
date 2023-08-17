const express = require ("express") 
const cors =require ("cors")
const app= express() 
const PORT = 5000

//--Middleware

app.use(express.json(),express.urlencoded({extended:true})) 
app.use(cors())

require("./Config/mongoose.config")

require("./routes/book.routes")(app)
require("./routes/user.routes")(app)




app.listen(PORT,()=>
{
    console.log(` >>>>>💕✅ SERVER IS RUNNING ON PORT ${PORT}`)

})