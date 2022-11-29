const mongoose = require("mongoose");

// const dbURI = 'mongodb+srv://chinmayshar:test123@nodeproj.n7lkre2.mongodb.net/nodeproj?retryWrites=true&w=majority'

const connectDatabase = ()=> {
    mongoose.connect(process.env.DB_URI)
 .then((result) => console.log('connected to Database!'))
 .catch((err) => console.log(err));
}

module.exports = connectDatabase;