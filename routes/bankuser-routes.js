const express=require("express");
const bankuseroute=express.Router();
const bankuser=require("../models/bankuser")
const bankusersController = require("../controller/bankuser-controller");

bankuseroute.post("/", bankusersController.addbankuser);

bankuseroute.get("/",bankusersController.getAllbankUsers);
bankuseroute.put("/:id",bankusersController.updatebankuser);
module.exports=bankuseroute;