const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const t = require("./Transaction");

// const role = require("./plugins/Role");

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
            type: String
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
        
    },
)
// companyAccount.plugins(role);


module.exports = mongoose.model('User', User)