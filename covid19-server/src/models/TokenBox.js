const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TokenBox = new Schema({
        vaccineCount: {
            type: String,
            required: true
        },
        status: {
            type: String
        },
        tokenId: {
            type: Number,
            required: true
        },
        previousOwners: {
            type: Array,
            required: true
        },
        currentOwner: {
            type: String,
            required: true
        },

// native JS Date() Obj - documentaion: https://mongoosejs.com/docs/tutorials/dates.html
        recentTransferDate: {
            type: Date,
            required: true
        }
    },
)

module.exports = mongoose.model('TokenBox', TokenBox)