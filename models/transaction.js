const mongoose=require('mongoose');

const transactionSchema = new mongoose.Schema({
   
   sendaccount:{
        type:String,
        required:true
    },
    receiveaccount:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }


});

const Transaction=mongoose.model('Transaction',transactionSchema);
module.exports = Transaction;