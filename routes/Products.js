const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json());

const {createProduct,getAllProducts}= require('../controllers/Products');

router.get("/", getAllProducts);

// router.get ("/", getAllProducts);

// router.post("/new",(req, res)=> {
//     console.log("we are here")
//     res.send("200", "Hello world")
// ;});

router.post("/new",createProduct);




// router.route("/product/new").post(createProduct);

// router.put("/", productController.putProduct);


// router.delete("/", productController.deleteProduct);
// router.put("/{id}", productController.putProduct);

// router.get("/{id_1}", productController.getProductId_1);
// router.get("/{id_2}", productController.getProductId_2);
// router.get("/{id_3}", productController.getProductId_3);
// router.get("/{id_4}", productController.getProductId_4);

module.exports = router;
