const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Request");

const options = {collection: "accounts"} // idk what this is 
//how do you add empty spot to befilled out/ 
let Request = new Schema({
        companyName: {
            type: String
        },
        companyAddress: {
            type: String
        },
        Amount: {
            type: Number
        }
    },
    options
)

module.exports = mongoose.model('requests', Request)