const { Schema, model } = require('mongoose');

const ProductsSchema = Schema({
    name: {
        type: String,
        required: [true, 'El Nombre del producto es obligatorio']
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true, 'El Precio del producto es obligatorio']
    },
    sotck: {
        type: Number,
        required: [true, 'Las Unidades disponibles del producto son obligatorias']
    },
    category: {
        type: Number,
        required: [true, 'La Categoría del producto es obligatorio']
    }
});

module.exports = model('Product', ProductsSchema);