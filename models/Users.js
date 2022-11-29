const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');




const UserSchema  = new Schema({
    name: {
        type: String,
        required: true,
     
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate:[validator.isEmail, "Please Enter a valid email"]
        ,
    },
    password: {
        type: String,
        required: true,
        validate:[validator.isStrongPassword,"Password is not strong enough"],
        
        unique:true,
        select:false
    },


    resetPasswordToken: String,
    resetPasswordExpire: Date,


}, {timestamps: true});



UserSchema.methods.getJWTToken = function() {
    return jwt.sign({
        id: this._id},process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRE
        });
};

const User = mongoose.model('User', UserSchema)

module.exports = User;

// Now you have to create an API to create login I.e. it will check the user has logged in or not
// If success then it should return JWT token.
// Copy these lines. If it helps.

// // 1. JWT
// 2. Password Encryption
// And third will be the middleware that we will learn once you are done with it


// avatar: {
//     public_id:{
//         type:String,
//         required:true
//     },
//     url:{
//         type:String,
//         required:true
//     }
// },
// role:{
//     type:String,
//     default:"user"
// },

//// UserSchema.statics.register = async (email,password) =>{

//     if(!email || !password){
//         res.json({
//             message:"Credentials not found!"
//         })
//     }

//     if(!validator.isEmail(email)){
//         res.json({
//             message:"Email is not valid!"
//         })
//     }

//     if(!validator.isStrongPassword(password)){
//         res.json({
//             message:"Password is not strong enough!"
//         })
//     }




// }