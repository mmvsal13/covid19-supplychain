const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Transaction = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    tokenId: {
        type: Array,
        required: true,
    },
    comments: {
        type: String,
    },
    //referencest to the list of Transacction objects
});

module.exports = mongoose.model('Transaction', Transaction);
