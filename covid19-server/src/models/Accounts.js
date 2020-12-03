const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Transaction");

const options = {collection: "accounts"} // idk what this is 
//how do you add empty spot to befilled out/ 
let companyAccount = new Schema({
        companyName: {
            type: String,
            unique: true
        },
        companyAddress: {
            type: String,
            unique: true
        },
        ethereumAddress: {
            type: String,
            unique: true,
            allowNull: false,
            validate: {isLowercase: true}
        },
        supplyChainRole: {
            type: Number
        },
        nonce: {
            type: Number,
            allowNull: false,
            default: function() {
                console.log("Create default nonce")
                return Math.floor(Math.random() * 1000000)
            }
        },
        //referencest to the list of Transacction objects
        transactionHistory: {
            type: [],
            unique: true
        }
    },
    options
)

module.exports = mongoose.model('companyAccount', companyAccount)