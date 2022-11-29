const UserService = require('../services/Users');
const User = require("../models/Users");

// Registering a new User 

const registerUser = async(req,res) => {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl"
        },
    });


    const token = user.getJWTToken();


    res.status(201).json({
        success:true,
        token
    });
};

const loginUser = async(req,res) => {

    const {email,password} = req.body;

    //checking if user has provided both email and password

    if(!email|| !password){
        return res.status(400).json({
            success:false
        });
    };



    
};

const profileUser = async(req,res) => {

   

    res.json({
        message:"This is the user profile."
    });
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODJmMmI2ZmVhZTUwODU5MjJhZjEzYyIsImlhdCI6MTY2OTUyNjE5OCwiZXhwIjoxNjY5Nzg1Mzk4fQ.mdbDbCgYUxU8-OrRY2989RsmrKHOlvIpNfFMUjDuNTY


const getAllUser = async(req,res) => {
    
    let page = req.params.page ? req.params.page : 1;
    let limit = req.params.limit ? req.params.limit : 10;
    try {
        let users = await UserService.getUsers()
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};




const putUser = (req,res) => {
    res.json({message: "PUT User"})
};

const deleteUser = (req,res) => {
    res.json({message: "DELETE User"})
};


   
module.exports = {getAllUser,registerUser,putUser,deleteUser,profileUser}