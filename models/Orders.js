const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema  = new Schema({
    user_id: {
        type: ObjectId,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    shipping_address: {
        type: String,
        required: true
    },
    payment_method_id: {
        type: ObjectId,
        required: true
    },
    shipping_method: {
        type: String,
        required: true
    },
    order_total: {
        type: Number,
        required: true
    },
    order_status: {
        type: String,
        required: true
    }
   
   
}, {timestamps: true});

 

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;