const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
  

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        default:null
    },

    googleId:{
        type:String,
        default:null
    },



    authProvider:{
        type:String,
        enum:["local","google"],
        default:"local"
    },

    isVerified:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("User", userSchema);