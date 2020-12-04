const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Transaction");

<<<<<<< HEAD
=======
// const role = require("./plugins/Role");


const options = {collection: "accounts"} // idk what this is 
>>>>>>> 7d4a19695ca2138c88396851a55021ec73dc3d28
//how do you add empty spot to befilled out/ 
let User = new Schema({
        companyName: {
            type: String,
            unique: true
        },
        companyAddress: {
            type: String,
            unique: true
        },
        publicAddress: {
            type: String,
            unique: true,
            allowNull: false,
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
)
// companyAccount.plugins(role);


module.exports = mongoose.model('User', User)