const UserControllers=require("../controllers/user.controllers")


console.log(UserControllers)

module.exports=(app)=>
{
    app.get("/api/users",UserControllers.findAllUser)
    app.post("/api/users",UserControllers.createNewUser)
    app.get("/api/users/:pid",UserControllers.findUser)
    app.put("/api/users/:pid",UserControllers.updateNewUser)
    app.delete("/api/users/:pid",UserControllers.deleteUser)
}

