const Product = require("../models/Products");


//Create Product

const createProduct = async (req,res) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

}


const getAllProducts = (req,res) => {
    res.json({message: "GET all the Products here!"})
};

// const getProductId_1 = (req,res) => {
//     res.json({message: "Info about product_id_1"})
// };
// const getProductId_2 = (req,res) => {
//     res.json({message: "Info about product_id_2"})
// };
// const getProductId_3 = (req,res) => {
//     res.json({message: "Info about product_id_3"})
// };
// const getProductId_4 = (req,res) => {
//     res.json({message: "Info about product_id_4"})
// };



// const newProduct = (req,res) => {
//     res.json({message: "POST new Product"})
// };

// const putProduct = (req,res) => {
//     res.json({message: "PUT Product Updates"})
// };

// const deleteProduct = (req,res) => {
//     res.json({message: "DELETE Product"})
// };

module.exports = {createProduct, getAllProducts};

/// install these
//compass, mongodb, online version of mongo db check once, 