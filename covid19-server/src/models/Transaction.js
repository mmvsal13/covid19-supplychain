const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Transaction = new Schema({
        from: {
            type: String
        },
        to: {
            type: String
        },
        date: {
            type: Number
        },
        TokenID: {
            type: Array
        },
        comments: {
            type: String
        }
        //referencest to the list of Transacction objects
    },
    options
)

module.exports = mongoose.model('companyAccount', companyAccount)