const getAllOrders = (req,res) => {
    res.json({message: "GET all orders"})
};

const newOrder = (req,res) => {
    res.json({message: "POST new Order"})
};

const putOrder = (req,res) => {
    res.json({message: "PUT Order Updates"})
};

const deleteOrder = (req,res) => {
    res.json({message: "DELETE Order"})
};

module.exports = {newOrder, getAllOrders, putOrder,deleteOrder};