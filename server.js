//mongodb+srv://rajdeepjash2070:ruby@2003@cluster0.mmvyb.mongodb.net/mernstack1?retryWrites=true&w=majority
const express=require("express");
const mongoose= require("mongoose");
const app=express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const useroute=require('./routes/user-routes');
app.use("/users",useroute);

const bankuseroute=require('./routes/bankuser-routes');
app.use("/bankusers",bankuseroute);

const transactionroute=require('./routes/transaction-routes');
app.use("/transaction",transactionroute);

const DB="mongodb+srv://rajdeepjash2070:zzH8zFclHLeNS7Bs@cluster0.mmvyb.mongodb.net/MernBank?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log('connection successful to database');
}).catch(error=>{
 console.log('Error:',error.message);
})

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
