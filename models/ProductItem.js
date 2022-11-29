const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductItemSchema  = new Schema({
    category_id: {
        type: ObjectId,
        required: true
    },
    
    product_id: {
        type: ObjectId,
        required: true
    },
    qty_in_stock: {
        type: Number,
        required: true
    },
    
    product_image: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
   
   
}, {timestamps: true});

 

const ProductItem = mongoose.model('ProductItem', ProductItemSchema)

module.exports = ProductItem;