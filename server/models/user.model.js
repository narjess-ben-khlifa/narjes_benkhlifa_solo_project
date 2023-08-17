const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema(   
    {
        fname: {type: String,required:[true,"first name is required"], minlength: [2, "{PATH} must be at least 2 chars long"]},
        lname:{type:String,required:[true,"last name is required "], minlength: [2, "{PATH} must be at least 2 chars long"]},
        email: { 
            type: String, 
            required: [true, "Email is required"], 
            minlength: [3, "L'{PATH} doit comporter au moins 3 caractères"],
            unique: [true,"email already exists"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "e-mail Adress invalide"]
          },
        password:{type:String,required:[true,"password is required"], minlength: [8, "{PATH} must be at least 8 chars long"]},
        cpassword:{type:String,required:[true,"confirmation password is required"], 
        validate:{
            validator: function(value) {
                return value === this.password; // Vérification que cpassword correspond à password
              },
              message: "Password confirmation does not match"
            }
        }
        
        
    },{timestamps:true} 

)

module.exports = mongoose.model("User",UserSchema) 