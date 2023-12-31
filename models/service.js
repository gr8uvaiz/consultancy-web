const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    head:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})

const Service = mongoose.model('Service',serviceSchema);
module.exports = Service;