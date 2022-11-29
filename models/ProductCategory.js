const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategorySchema  = new Schema({
    category_id: {
        type: ObjectId,
        required: true
    },
    parent_category_id: {
        type: ObjectId,
        required: true
    },
    category_name: {
        type: String,
        required: true
    }
   
   
   
}, {timestamps: true});

 

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema)

module.exports = ProductCategory;