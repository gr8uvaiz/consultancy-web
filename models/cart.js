const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    head: {
        type: String,
    },
    content: {
        type: String,
    },
    price: {
        type: Number,
    }


})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;