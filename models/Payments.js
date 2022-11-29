const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema  = new Schema({
    category_id: {
        type: ObjectId,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    },
    payment_type: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    account_number: {
        type: ObjectId,
        required: true
    },
    expiry_date: {
        type: Date,
        required: true
    },
    is_default: {
        type: Boolean,
        required: true
    }
   
   
}, {timestamps: true});

 

const Payment = mongoose.model('Payment', PaymentSchema)

module.exports = Payment;