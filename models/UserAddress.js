const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAddressSchema  = new Schema({
    id: {
        type: ObjectId,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    },
    address_line1: {
        type: String,
        required: true
    },
    address_line2: {
        type: String,
        required: true
    },
   city: {
        type: String,
        required: true
    },
   postal_code: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
  
}, {timestamps: true});

 

const UserAddress = mongoose.model('UserAddress', UserAddressSchema)

module.exports = UserAddress;