const BookControllers=require("../controllers/book.controllers")



console.log(BookControllers)

module.exports=(app)=>
{
    app.get("/api/books",BookControllers.findAllBook)
    app.post("/api/books",BookControllers.createNewBook)
    app.get("/api/books/:pid",BookControllers.findBook)
    app.put("/api/books/:pid",BookControllers.updateNewBook)
    app.delete("/api/books/:pid",BookControllers.deleteBook)
}

