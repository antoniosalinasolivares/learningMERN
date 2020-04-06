const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: [{type: String, required: true}],
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps : true
})

const model = mongoose.model('product', productSchema);
module.exports = model; 