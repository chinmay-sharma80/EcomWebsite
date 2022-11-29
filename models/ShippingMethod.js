const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingMethodSchema  = new Schema({
    category_id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
  
   
   
}, {timestamps: true});

 

const ShippingMethod = mongoose.model('ShippingMethod', ShippingMethodSchema)

module.exports = ShippingMethod;