const User =require("../models/user.model")

//CRUD


//READ ALL
module.exports.findAllUser=(req,res)=>
{
    User.find({})
    .then(allUsers=>
        {
            console.log(allUsers)
            res.json(allUsers)
        })
    .catch(err=>
        {
            res.json({message:'wait a minute😒😒',error:err})
        })

}
//CREATE
module.exports.createNewUser = (req,res) =>
{
   User.create(req.body)
        .then(user=>
            {
                console.log(user)
                res.status(200).json({user})
            })
        .catch(err=>
            {
                res.status(400).json({message:'wait a minute😶😶',error:err})
            })
}

// //FIND ONE
module.exports.findUser = (req,res) =>
{
   User.findOne({_id:req.params.pid})
        .then(theUser=>
            {
                console.log(theUser)
                res.json({theUser})
            })
        .catch(err=>
            {
                res.json({message:'wait a minute😶😶',error:err})
            })
}

// //UPDATE
module.exports.updateNewUser = (req,res) =>
{
   User.findOneAndUpdate(
    {_id:req.params.pid},
    req.body,
    {new:true,runValidators:true})
        .then(updatedUser=>
            {
                console.log(updatedUser)
                res.json({updatedUser})
            })
        .catch(err=>
            {
                res.json({message:'wait a minute😶😶',error:err})
            })
}
//DELETE
module.exports.deleteUser= (req, res) => 
{
    User.deleteOne({ _id: req.params.pid })
        .then((deletedId) => res.json({deletedId}))
        .catch((err) => console.log(err));
}

