  const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const options = {collection: "accounts"} // idk what this is 
//how do you add empty spot to befilled out/ 
let companyAccount = new Schema({
        companyName: {
            type: String
        },
        companyAddress: {
            type: String
        },
        supplyChainRole: {
            type: Number
        }
    },
    options
)

module.exports = mongoose.model('companyAccount', companyAccount)