const mongoose = require("mongoose");
const BankSchema = new mongoose.Schema({
    accountNumber : {
        type:String,
        required : true,
    },
    amount : {
        type:Number,
        required : true,
    },
    duration : {
        type:Number,
        required : true,
        default: 1
    },
    type : {
        type:String,possibleValues: ['Home Loan','Education Loan','Vehicle Loan', 'Gold Loan', 'Personal Loan', 'Other Loan'],
        required : true,
        default: 'Other Loan'
    },
    interest: {
        type:Number,
    }
})
const loan = new mongoose.model("loan", BankSchema);
module.exports = loan;