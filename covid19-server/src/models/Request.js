const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Request");

// const options = {collection: "accounts"} // idk what this is 
//how do you add empty spot to befilled out/ 
let Request = new Schema({
        ID: {
            type: Number
        },
        ShipmentID: {
            type: String
        },
        Date: {
            type: String
        },
        Order: {
            type: String
        },
        Quantity: {
            type: Number
        },
        Client: {
            type: String
        },
        Tag: {
            type: [String]
        }
    },
)

module.exports = mongoose.model('Request', Request)