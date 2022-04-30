const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
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
    secondphonenumber:{
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

});

const User=mongoose.model('User',userSchema);
module.exports = User;