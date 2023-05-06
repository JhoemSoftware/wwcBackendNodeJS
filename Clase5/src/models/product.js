const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: false,
        default: 0
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = model('Product', ProductsSchema);