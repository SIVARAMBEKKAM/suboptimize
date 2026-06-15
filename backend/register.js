const bcrypt = require("bcryptjs");
const User = require("./usermodel");

const register = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const existingUser =
        await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user = await User.create({
            email,
            password:hashedPassword,
            authProvider:"local",
            isVerified:true
        });

        res.status(201).json(user);

    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}
module.exports = register;