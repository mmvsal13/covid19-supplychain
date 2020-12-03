const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Transaction");

const role = require("./plugins/Role");


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
        },
        //referencest to the list of Transacction objects
        transactionHistory: {
            type: []
        }
    },
    options
)
companyAccount.plugins(role);


module.exports = mongoose.model('companyAccount', companyAccount)