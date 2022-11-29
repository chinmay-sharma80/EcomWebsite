// var User = require('../models/user.model')

const getUsers = () => {
 let userList = "This is the user list."
 return userList;
 
}

module.exports = {getUsers}


// try {
//     let users = await User.find(query)
//     return users;
// } catch (e) {
//     // Log Errors
//     throw Error('Error while Paginating Users')
// }