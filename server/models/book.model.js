const mongoose=require("mongoose")

const BookSchema = new mongoose.Schema(   
    {
        title: {type: String,required:[true,"Title is required"], minlength: [3, "{PATH} must be at least 3 chars long"]},
        description:{type:String,required:[true,"description is required "], minlength: [5, "{PATH} must be at least 5 chars long"]},
        favorite:{type:Array}
        
        
        
    },{timestamps:true} 

)

module.exports = mongoose.model("Book",BookSchema) 
