const jwt = require('jsonwebtoken');
const User = require('../models/Users');



    
    const isAuthenticatedUser = async(req,res,next)=> {

    const token = req.headers.authorization;
    const elden = token.split(' ')[1];

    console.log(elden);


    //req.header = bearer token
    // separate bearer token from string
    //pass separated token in place of token

    const decoded = jwt.verify(elden,process.env.JWT_SECRET);   
    if(!decoded) {
        res.status(401).send("Unauthorized");
    }
    // // if no decoded data res.send "unauthorized",(401)
    req.userData = decoded;

    next();
};






module.exports = isAuthenticatedUser;