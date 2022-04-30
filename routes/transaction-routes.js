const express=require("express");
const transactionroute=express.Router();
const transaction=require("../models/transaction")
const transactionsController = require("../controller/transaction-controller");

transactionroute.post("/", transactionsController.addtransaction);

transactionroute.get("/",transactionsController.getAllTransactions);


module.exports=transactionroute;