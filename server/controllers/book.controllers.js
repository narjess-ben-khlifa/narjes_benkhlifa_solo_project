const Book =require("../models/book.model")

//CRUD


//READ ALL
module.exports.findAllBook=(req,res)=>
{
    Book.find({})
    .then(allBooks=>
        {
            console.log(allBooks)
            res.json(allBooks)
        })
    .catch(err=>
        {
            res.json({message:'wait a minute😒😒',error:err})
        })

}
//CREATE
module.exports.createNewBook = (req,res) =>
{
   Book.create(req.body)
        .then(book=>
            {
                console.log(book)
                res.status(200).json({book})
            })
        .catch(err=>
            {
                res.status(400).json({message:'wait a minute😶😶',error:err})
            })
}

// //FIND ONE
module.exports.findBook = (req,res) =>
{
   Book.findOne({_id:req.params.pid})
        .then(theBook=>
            {
                console.log(theBook)
                res.json({theBook})
            })
        .catch(err=>
            {
                res.json({message:'wait a minute😶😶',error:err})
            })
}

// //UPDATE
module.exports.updateNewBook = (req,res) =>
{
   Book.findOneAndUpdate(
    {_id:req.params.pid},
    req.body,
    {new:true,runValidators:true})
        .then(updatedBook=>
            {
                console.log(updatedBook)
                res.json({updatedBook})
            })
        .catch(err=>
            {
                res.json({message:'wait a minute😶😶',error:err})
            })
}
//DELETE
module.exports.deleteBook= (req, res) => 
{
    Book.deleteOne({ _id: req.params.pid })
        .then((deletedId) => res.json({deletedId}))
        .catch((err) => console.log(err));
}

