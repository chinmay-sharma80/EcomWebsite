const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderStatusSchema  = new Schema({
    category_id: {
        type: ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
   
   
}, {timestamps: true});

 

const OrderStatus = mongoose.model('OrderStatus', OrderStatusSchema)

module.exports = OrderStatus;