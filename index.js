const express =  require("express");
var cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");




const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: './config/config.env' });
connectDatabase();








const app = express();




const PORT = 3001;

app.use(cors({
    origin:"*"
}));

app.use(bodyParser.urlencoded({extended:false}));
//check for cors
//how to prevent sql injection (dont allow, special characters)
app.use(bodyParser.json());





const userRoute = require('./routes/Users');
const productRoute = require('./routes/Products');
const orderRoute = require('./routes/Orders');

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);

 
app.listen(PORT, () => {
    console.log("Server is running");
});

