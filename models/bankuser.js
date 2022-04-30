const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
  
   accountnumber:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
   
   
   
    amount:{
        type:Number,
        required:true
    }

});

const BankUser=mongoose.model('BankUser',userSchema);
module.exports = BankUser;