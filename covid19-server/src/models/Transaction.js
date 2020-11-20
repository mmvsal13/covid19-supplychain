const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const options = {collection: "accounts"} // idk what this is 
//how do you add empty spot to befilled out/ 
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
            type: Number
        },
        //referencest to the list of Transacction objects

    },
    options
)

module.exports = mongoose.model('companyAccount', companyAccount)