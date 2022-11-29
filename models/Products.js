const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const ProductSchema  = new Schema({
 
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    }
   
   
}, {timestamps: true});

 

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;